// src/hooks/useChecklist.js
import { useState } from "react";

const useChecklist = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    I: {
      mainChecked: false,
      subChecked: { 1.1: false, 1.2: false, 1.3: false },
    },
    II: {
      mainChecked: false,
      subChecked: { 2.1: false, 2.2: false, 2.3: false },
    },
    III: {
      mainChecked: false,
      subChecked: { 3.1: false, 3.2: false, 3.3: false },
    },
    IV: {
      mainChecked: false,
      subChecked: { 4.1: false, 4.2: false, 4.3: false },
    },
    V: {
      mainChecked: false,
      subChecked: { 5.1: false, 5.2: false, 5.3: false },
    },
  });

  const [currentSection, setCurrentSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const handleBackClick = () => {
    setCurrentSection(null);
  };

  const handleMainCheckboxChange = (sectionId) => {
    const newCheckboxStates = { ...checkboxStates };
    const subCheckboxes = Object.keys(newCheckboxStates[sectionId].subChecked);
    const allChecked = subCheckboxes.every(
      (id) => newCheckboxStates[sectionId].subChecked[id]
    );

    if (allChecked) {
      newCheckboxStates[sectionId].mainChecked = false;
      subCheckboxes.forEach((id) => {
        newCheckboxStates[sectionId].subChecked[id] = false;
      });
    } else {
      newCheckboxStates[sectionId].mainChecked = true;
      subCheckboxes.forEach((id) => {
        newCheckboxStates[sectionId].subChecked[id] = true;
      });
    }
    setCheckboxStates(newCheckboxStates);
  };

  const handleSubCheckboxChange = (sectionId, subId) => {
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[sectionId].subChecked[subId] =
      !newCheckboxStates[sectionId].subChecked[subId];

    const allChecked = Object.values(
      newCheckboxStates[sectionId].subChecked
    ).every((val) => val);

    newCheckboxStates[sectionId].mainChecked = allChecked;
    setCheckboxStates(newCheckboxStates);
  };

  return {
    currentSection,
    checkboxStates,
    handleSectionClick,
    handleBackClick,
    handleMainCheckboxChange,
    handleSubCheckboxChange,
  };
};

export default useChecklist;
