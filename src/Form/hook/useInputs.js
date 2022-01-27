import { useState } from "react";

const useInputs = (inputValue = "") => {
  const [value, setValue] = useState(inputValue);
  const handleInputChange = (e) => setValue(e.currentTarget.value);
  const isBlank = !value.trim();
  return { value, setValue, handleInputChange, isBlank };
};

export default useInputs;
