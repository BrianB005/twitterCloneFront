import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signout } from "../redux/actions/userActions";
import { sidebarLinks } from "../sidebarItems";
import SidebarItem from "./SidebarItem";
import { BsFillPersonDashFill } from "react-icons/bs";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <List>
        {sidebarLinks.map((link) => {
          return <SidebarItem key={link.id} {...link} />;
        })}
      </List>
      <Logout>
        <div onClick={() => dispatch(signout())}>
          <BsFillPersonDashFill />
        </div>
        <h4>Logout</h4>
        <Button onClick={() => dispatch(signout())}>Logout</Button>
      </Logout>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0.3;
  height: 100vh;
  border-right: 1px solid lightgray;
  padding-top: 120px;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logout = styled.div`
  position: relative;
  display: flex;
  margin-left: 12px;
  padding: 8px 12px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    &:hover {
      h4 {
        display: block;
      }
    }
  }
  h4 {
    position: absolute;
    top: 23px;
    left: -2px;
    font-weight: 400;
    transition: all 0.5s linear;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  div,
  h4 {
    @media screen and (min-width: 600px) {
      display: none;
    }
  }
`;
const Button = styled.button`
  border-radius: 15px;
  margin-top: 60px;
  background: cyan;
  cursor: pointer;
  width: fit-content;
  padding: 6px 20px;
  border: none;
  display: flex;

  margin-left: 30px;
  @media screen and (max-width: 600px) {
    display: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default Sidebar;
