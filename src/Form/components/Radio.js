import styled from "styled-components";

const Styledradio = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 20px;
    font-family: MicrosoftJhengHei;
    color: black;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  & > label:nth-child(2) {
    margin-bottom: 15px;
  }
  & > label:last-child {
    margin-bottom: 42px;
  }
`;

export default function Radio({
  className,
  name,
  labelTitle,
  radioOption,
  inputValue,
}) {
  return (
    <Styledradio className={className}>
      <p>{labelTitle}</p>
      {radioOption.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={() => inputValue.setValue(option.value)}
          />
          {option.des}
        </label>
      ))}
    </Styledradio>
  );
}
