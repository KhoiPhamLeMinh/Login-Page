import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [checkLists, setCheckLists] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserProfile = async () => {
      const response = await fetch("http://localhost:5122/api/Auth/user-profile", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
        fetchCheckLists(data.userId); 
      } else {
        alert("Lỗi xác thực: " + data.message);
      }
    };

    const fetchCheckLists = async (userId) => {
      const response = await fetch(`http://localhost:5122/api/checklist/user/${userId}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
      });

      const data = await response.json();
      if (response.ok) {
        setCheckLists(data);
      } else {
        alert("Lỗi lấy danh sách CheckList: " + data.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Xin chào, {user.username} (ID: {user.userId})</p> : <p>Đang tải...</p>}

      <h3>Danh sách CheckList của bạn:</h3>
      {checkLists.length > 0 ? (
        <ul>
          {checkLists.map(sheet => (
            <li key={sheet.id}>{sheet.title} - {sheet.items.length} mục</li>
          ))}
        </ul>
      ) : (
        <p>Không có CheckList nào.</p>
      )}
    </div>
  );
}
