import styled from "styled-components";

const Styledinput = styled.div`
  & label {
    font-size: 20px;
    color: black;
    margin-bottom: 52px;
  }
`;

export default function Input({ inputValue, id, type, labelTitle, subTitle }) {
  return (
    <Styledinput>
      <label htmlFor={id}>{labelTitle}</label>
      <input type></input>
    </Styledinput>
  );
}
