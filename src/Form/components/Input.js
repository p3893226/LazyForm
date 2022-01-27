import styled from "styled-components";

const Styledinput = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 260px;
  margin-bottom: 52px;

  & > label {
    font-size: 20px;
    font-family: MicrosoftJhengHei;
    color: black;
    margin-bottom: 10px;
  }

  & > input {
    font-size: 100%;
    padding: 2px 3px;
    ::placeholder {
      color: #afafaf;
      font-size: 14px;
      opacity: 1;
      letter-spacing: 1.2 rem;
    }
  }
  & > p {
    font-size: 0.8rem;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  & > span {
    margin-top: 8px;
    color: red;
    font-weight: bold;
  }
`;

export default function Input({
  inputValue,
  id,
  type,
  placeholder,
  labelTitle,
  subTitle,
  className,
  isBlank,
  errorMessage,
}) {
  return (
    <Styledinput className={className}>
      <label htmlFor={id}>{labelTitle}</label>
      {subTitle ? <p>{subTitle}</p> : ""}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputValue.value}
        onChange={inputValue.handleInputChange}
      ></input>
      {isBlank ? <span>{errorMessage}</span> : ""}
    </Styledinput>
  );
}
