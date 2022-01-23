import styled from "styled-components";
import useInputs from "./hook/useInputs";
import Input from "./components/Input";

const Styledform = styled.form`
  margin: auto;
  padding: 54px 100px 35px 42px;
  max-width: 645px;
  margin-top: 129px;
  box-shadow: 1.8px 2.4px 5px 0 #0000004c;
  border-top: solid 10px #fad312;
`;

const Styledtitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 35px;
`;

const Styledactivity = styled.p`
  font-family: MicrosoftJhengHei;
  font-size: 14px;
  line-height: 1.5rem;
`;
const Styledwarning = styled.p`
  font-size: 16px;
  color: #e74149;
  margin-top: 22px;
  margin-bottom: 55px;
`;

function Form() {
  const nickname = useInputs();
  const email = useInputs();
  const phoneNumber = useInputs();
  const question = useInputs();
  const other = useInputs();
  return (
    <Styledform>
      <Styledtitle>新拖延運動報名表單</Styledtitle>
      <Styledactivity>
        活動日期:2020/12/10 ~ 2020/12/11
        <br />
        活動地點:台北市大安區新生南路二段1號
      </Styledactivity>
      <Styledwarning>*必填</Styledwarning>
    </Styledform>
  );
}

export default Form;
