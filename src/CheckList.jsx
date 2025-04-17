import React, { useState, useEffect } from "react";
import { getCheckLists } from "./api/checklist";
import { getCheckListItems } from "./api/checklistitem";
import { useNavigate } from "react-router-dom";
function CheckList() {
  const [checkListState, setCheckListState] = useState([]);
  // const [input, setInput] = useState("");
  const [CheckListdItems, setCheckListItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCheckLists()
      .then((res) => setCheckListState(res.data))
      .catch((err) => console.log(err));
  }, []);

  function fetchItems(checklistId) {
    getCheckListItems(checklistId)
      .then((res) => {
        setCheckListItems(res.data);
        navigate("/items", { state: { items: res.data } }); // Chuyển trang và truyền data
      })
      .catch((err) => console.log(err));
  }

  // function handleInputChange(event) {
  //     setInput(event.target.value);
  // }

  // function addCheck() {
  //     setCheckListState([...checkListState, input]);
  //     setInput("");
  // }

  console.log(checkListState);

  return (
    <div>
      <h3>Danh sách Checklist</h3>
      <ul>
        {checkListState.map((item, index) => (
          <li key={index}>
            <span
              onClick={() => fetchItems(item.id)}
              className="cursor-pointer"
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
