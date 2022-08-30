import React from "react";
// import FlashMessage from "react-flash-message";
import styled from "styled-components";
const Alert = ({ title, type }) => (
  <Wrapper>
    <AlertContainer type>
      {title}
      {/* <FlashMessage>{title}</FlashMessage> */}
    </AlertContainer>
  </Wrapper>
);
const Wrapper = styled.div`
  display: flex;
  background: ${(props) => (props.type === "success" ? "green" : "lightred")};
  color: lightseagreen;
  z-index: 1000;
  position: absolute;
  top: -180px;
  left: 0;
  right: 0;
  margin: auto;
  /* margin-top: 80px; */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;
const AlertContainer = styled.h4`
  padding: 6px 0;
  /* background: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  /* height: 24px; */
  position: absolute;

  color: lightblue;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  background: ${({ danger }) => danger && "lightred"};
  background: ${({ success }) => success && "lightgreen"};
  background: ${({ info }) => info && "lightblue"};
`;

export default Alert;
