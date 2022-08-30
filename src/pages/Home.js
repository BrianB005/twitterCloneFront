import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateTweet from "../components/CreateTweet";
import Sidebar from "../components/Sidebar";
import Tweets from "../components/Tweets";
import Pusher from "pusher";

const Home = () => {
  // configuring pusher
  const pusher = new Pusher({
    appId: "APP_ID",
    key: "APP_KEY",
    secret: "APP_SECRET",
    cluster: "APP_CLUSTER",
    useTLS: true,
  });
  const userInfo = useSelector((state) => state.userSignin);
  const navigate = useNavigate();
  if (!userInfo?.userInfor) {
    navigate("/login");
  }
  return (
    <Wrapper>
      <Sidebar />
      <TweetsWrapper>
        <CreateTweet />
        <Tweets />
      </TweetsWrapper>
      <Right></Right>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 600px;
  /* overflow-x: hidden; */
`;

const TweetsWrapper = styled.div`
  flex: 0.5;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Right = styled.div`
  flex: 0.2;
`;

export default Home;
