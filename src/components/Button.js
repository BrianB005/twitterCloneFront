import React from "react";
import styled from "styled-components";
const Button = ({ children }) => {
  return <Button1>{children}</Button1>;
};
const Button1 = styled.button`
  padding: 9px 30px;
  margin: 15px auto;
  /* margin-left: 46%; */
  background-color: aquamarine;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;

  transition: all 0.5s linear;
  &:hover {
    background: mediumseagreen;
    border-radius: 21px;
    color: white;
  }
`;

export default Button;
