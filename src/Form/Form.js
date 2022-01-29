import styled from "styled-components";
import useInputs from "./hook/useInputs";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Footer from "./components/Footer";

const Styledform = styled.form`
  margin: auto;
  padding: 54px 100px 35px 42px;
  max-width: 645px;
  margin-top: 129px;
  box-shadow: 1.8px 2.4px 5px 0 #0000004c;
  border-top: solid 10px #fad312;
  > p {
    font-size: 14px;
  }
  .required > :first-child::after {
    content: "*";
    color: #e74149;
    font-size: 1.3rem;
    margin-left: 5px;
  }
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
const Styledsubmit = styled.input`
  font-size: 15px;
  margin-bottom: 21px;
  padding: 10px 25px;
  border: none;
  border-radius: 3px;
  background: #fad312;
`;

function Form() {
  const { isBlankData, setData, data, handleSubmitClick } = useInputs();
  const {
    nickname: isNicknameBlank,
    email: isEmailBlank,
    phoneNumber: isPhoneNumberBlank,
    question: isQuestionBlank,
    type: isTypeBlank,
  } = isBlankData;
  const nickname = useInputs();
  const email = useInputs();
  const phoneNumber = useInputs();
  const question = useInputs();
  const other = useInputs();
  const type = useInputs();
  const radioOption = [
    { des: "躺在床上用想像力實作", value: "1" },
    { des: "趴在地上滑手機找現成的", value: "2" },
  ];
  const errMsg = [
    "請輸入暱稱",
    "請輸入電子郵件",
    "請輸入手機號碼",
    "請輸入回答",
    "請輸入類型",
  ];
  return (
    <>
      <Styledform onSubmit={handleSubmitClick}>
        <Styledtitle>新拖延運動報名表單</Styledtitle>
        <Styledactivity>
          活動日期:2020/12/10 ~ 2020/12/11
          <br />
          活動地點:台北市大安區新生南路二段1號
        </Styledactivity>
        <Styledwarning>*必填</Styledwarning>
        <Input
          className="required"
          id={"nickname"}
          type={"text"}
          labelTitle={"暱稱"}
          inputValue={nickname}
          placeholder={"您的暱稱"}
          isBlank={isNicknameBlank}
          setData={setData}
          data={data}
          errorMessage={errMsg[0]}
        ></Input>
        <Input
          className="required"
          id={"email"}
          type={"email"}
          labelTitle={"電子郵件"}
          inputValue={email}
          placeholder={"您的電子郵件"}
          isBlank={isEmailBlank}
          setData={setData}
          data={data}
          errorMessage={errMsg[1]}
        ></Input>
        <Input
          className="required"
          id={"phoneNumber"}
          type={"tel"}
          labelTitle={"手機號碼"}
          inputValue={phoneNumber}
          placeholder={"您的手機號碼"}
          isBlank={isPhoneNumberBlank}
          setData={setData}
          data={data}
          errorMessage={errMsg[2]}
        ></Input>
        <Input
          className="required"
          id={"question"}
          type={"text"}
          labelTitle={"怎麼知道這個活動的"}
          inputValue={question}
          placeholder={"您的回答"}
          isBlank={isQuestionBlank}
          setData={setData}
          data={data}
          errorMessage={errMsg[3]}
        ></Input>
        <Radio
          className="required"
          name={"enroll"}
          labelTitle={"報名類型"}
          radioOption={radioOption}
          inputValue={type}
          isBlank={isTypeBlank}
          setData={setData}
          data={data}
          errorMessage={errMsg[4]}
        ></Radio>
        <Input
          id={"other"}
          type={"text"}
          labelTitle={"其他"}
          subTitle={"對活動的一些建議"}
          inputValue={other}
          placeholder={"您的回答"}
          setData={setData}
          data={data}
        ></Input>
        <Styledsubmit type="submit" className="submit"></Styledsubmit>
        <p>請勿透過表單送出您的密碼。</p>
      </Styledform>
      <Footer />
    </>
  );
}

export default Form;
