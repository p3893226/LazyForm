import styled from "styled-components";

const FooterWrap = styled.div`
  min-width: 300px;
  margin-top: 44px;
  padding: 26px;
  text-align: center;
  background: black;
  color: gray;
  font-size: 18px;
`;

const Footer = () => {
  return <FooterWrap>Copyright &copy; 2022 All rights reserved.</FooterWrap>;
};

export default Footer;
