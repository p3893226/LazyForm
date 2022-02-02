import { useState } from "react";

const useInputs = (inputValue = "") => {
  const formData = {
    nickname: "",
    email: "",
    phoneNumber: "",
    question: "",
    type: "",
    other: "",
  };
  const blankData = {
    nickname: null,
    email: null,
    phoneNumber: null,
    question: null,
    type: null,
  };
  const [value, setValue] = useState(inputValue);
  const [data, setData] = useState(formData);
  const [isBlankData, setIsBlankData] = useState(blankData);

  const handleSubmitClick = (e) => {
    let counter = 0;
    let isBlankCopy = { ...isBlankData };
    e.preventDefault();
    Object.entries(data).forEach(([key, value]) => {
      if (!!value.trim() & (key !== "other")) {
        isBlankCopy[key] = false;
        counter += 1;
      } else {
        isBlankCopy[key] = true;
      }
    });
    setIsBlankData(isBlankCopy);
    if (counter === 5) {
      alert(`
      報名成功!! 
      暱稱: ${data.nickname}
      電子郵件: ${data.email}
      手機號碼: ${data.phoneNumber}
      如何知道活動: ${data.question}
      報名類型: ${data.type}
      其他:${data.other}
      `);
    } else {
      alert(`請確認必填資料`);
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
