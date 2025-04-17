import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Checksheet from "./pages/CheckSheet"; // Import Checksheet.jsx

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checksheet" element={<Checksheet />} />{" "}
        {/* Thêm route cho Checksheet */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
