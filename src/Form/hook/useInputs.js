import { useState } from "react";

const useInputs = (inputValue = "") => {
  const [value, setValue] = useState(inputValue);

  const formData = {
    nickname: "",
    email: "",
    phoneNumber: "",
    question: "",
    type: "",
  };
  const blankData = {
    nickname: null,
    email: null,
    phoneNumber: null,
    question: null,
    type: null,
  };
  const [data, setData] = useState(formData);
  const [isBlankData, setIsBlankData] = useState(blankData);
  const handleSubmitClick = (e) => {
    let counter = 0;
    let isBlankCopy = { ...isBlankData };
    e.preventDefault();
    Object.entries(data).forEach(([key, value]) => {
      if (!value.trim()) {
        isBlankCopy[key] = true;
      } else {
        isBlankCopy[key] = false;
        counter += 1;
      }
    });
    setIsBlankData(isBlankCopy);
    if (counter === 5) {
      alert(`報名成功`);
    } else {
      alert(`請確認資料`);
    }
  };

  return {
    value,
    setValue,
    isBlankData,
    data,
    setData,
    handleSubmitClick,
  };
};

export default useInputs;
// ;
