import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SidebarItem = ({ icon, text, url }) => {
  return (
    <Link to={url}>
      <Wrapper>
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
      </Wrapper>
    </Link>
  );
};

const Text = styled.h4`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 500;
  font-size: 17px;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 42px;
    left: -2px;
    font-size: 14px;
    transition: all 0.3s linear;
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  text-align: center;
  margin-left: 12px;
  /* margin-right: 12px;
  margin-bottom: 13px; */
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 18px;
  position: relative;
  &:hover {
    background: cyan;
    ${Text} {
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 13px 10px;
    &:hover {
      background: transparent;
    }
  }
`;
const Icon = styled.div`
  margin-right: 10px;
`;

export default SidebarItem;
