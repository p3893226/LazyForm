import { useState } from "react";

const useInputs = (inputValue = "") => {
  const [value, setValue] = useState(inputValue);
  const handleInputChange = (e) => setValue(e.currentTarget.value);
  const [isBlank, setIsBlank] = useState(null);
  const handleIsBlank = () => setIsBlank(!value.trim());
  const formData = {
    nickname: "",
    email: "",
    phoneNumber: "",
    question: "",
    type: "",
  };
  const [data, setData] = useState(formData);
  const handleSubmitClick = () => {};
  return {
    value,
    setValue,
    handleInputChange,
    isBlank,
    handleIsBlank,
    data,
    setData,
  };
};

export default useInputs;
// ;
