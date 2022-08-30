import React from "react";
import styled from "styled-components";
const Loader = () => {
  return (
    <Wrapper>
      <LoaderWrapper>
        <LoaderDiv />
        <LoaderDiv />
      </LoaderWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 960px;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  margin-top: 180px;
  justify-content: center;
`;
const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const LoaderDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 10px solid transparent;
  border-top-color: #b2f9fc;
  /* border-left-color: #B2F2FC ; */

  border-radius: 50%;
  animation: loaderOne 1.3s linear infinite;
  &:last-child {
    border: 10px solid transparent;
    border-bottom-color: #b2f9fc;
    /* border-right-color:#B2F8EC; */
    animation: loaderTwo 1.3s linear infinite;
  }

  @keyframes loaderOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 2px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }
  @keyframes loaderTwo {
    0% {
      transform: rotate(0deg);
      border-width: 2px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 2px;
    }
  }
`;

export default Loader;
