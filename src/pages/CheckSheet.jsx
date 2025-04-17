// src/components/Checksheet.js
import React from "react";
import "./CheckSheet.css";
import logo from "../images/Logo.jpg";
import alarm from "../images/alarm.png";
import useChecklist from "../hooks/useCheckList";

const sectionContents = {
  I: {
    title: "Nội dung kiểm tra chất lượng sản phẩm",
    subSections: [
      { id: "1.1", content: "..." },
      { id: "1.2", content: "..." },
      { id: "1.3", content: "..." },
    ],
  },
  II: {
    title: "Nội dung kiểm tra bảo trì trong nhà máy",
    subSections: [
      { id: "2.1", content: "..." },
      { id: "2.2", content: "..." },
      { id: "2.3", content: "..." },
    ],
  },
  III: {
    title: "Nội dung kiểm tra cơ khí, cơ điện",
    subSections: [
      { id: "3.1", content: "..." },
      { id: "3.2", content: "..." },
      { id: "3.3", content: "..." },
    ],
  },
  IV: {
    title: "Nội dung kiểm tra vận hành cơ bản",
    subSections: [
      { id: "4.1", content: "..." },
      { id: "4.2", content: "..." },
      { id: "4.3", content: "..." },
    ],
  },
  V: {
    title: "Nội dung kiểm tra hiệu suất và ổn định",
    subSections: [
      { id: "5.1", content: "..." },
      { id: "5.2", content: "..." },
      { id: "5.3", content: "..." },
    ],
  },
};

const Checksheet = () => {
  const {
    currentSection,
    checkboxStates,
    handleSectionClick,
    handleBackClick,
    handleMainCheckboxChange,
    handleSubCheckboxChange,
  } = useChecklist(); // Use the custom hook

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Company Logo" className="logo-img" />
        </div>
        <div className="title">
          <h1>Checksheet</h1>
          <p>Checksheet</p>
        </div>
        <div className="user-info">
          <img src={alarm} alt="alarm-img" className="alarm-img" />
          <span className="company-name">I-Soft</span>
          <span className="user-icon">👤</span>
        </div>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <button className="sidebar-btn">Overview</button>
          <button className="sidebar-btn">Dashboard</button>
          <button className="sidebar-btn active">Checksheet</button>
          <button className="sidebar-btn">Historical</button>
          <button className="sidebar-btn">Setting</button>
        </aside>

        <section className="content">
          <h1 className="submit">Submit</h1>

          {!currentSection ? (
            <div className="checklist">
              <h2>Danh sách các việc phải làm</h2>
              <ul>
                {Object.keys(sectionContents).map((key) => (
                  <li key={key}>
                    <span
                      className="checklist-item-text"
                      onClick={() => handleSectionClick(key)}
                    >
                      {key}. {sectionContents[key].title}
                    </span>
                    <input
                      type="checkbox"
                      checked={checkboxStates[key].mainChecked}
                      onChange={() => handleMainCheckboxChange(key)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="section-content">
              <h2>{sectionContents[currentSection].title}</h2>
              <ul>
                {sectionContents[currentSection].subSections.map((sub) => (
                  <li key={sub.id}>
                    <span className="checklist-item-text">
                      {sub.id}. {sub.content}
                    </span>
                    <input
                      type="checkbox"
                      checked={
                        checkboxStates[currentSection].subChecked[sub.id]
                      }
                      onChange={() =>
                        handleSubCheckboxChange(currentSection, sub.id)
                      }
                    />
                  </li>
                ))}
              </ul>
              <button className="sidebar-btn" onClick={handleBackClick}>
                ← Quay lại
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Checksheet;
