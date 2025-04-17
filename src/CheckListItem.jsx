import { useLocation } from "react-router-dom";

function CheckListItem() {
  const location = useLocation();
  const CheckListItems = location.state?.items || [];

  return (
    <div>
      <h3>Checklist Items</h3>
      <ul>
        {CheckListItems.map((item, index) => (
          <li key={index}>
            {item.content} | {item.isChecked ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckListItem;
