import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import SingleUserProfile from "./SingleUserProfilePage";
import SingleUserProfileTweets from "./SingleUserTweets";
const SingleUser = () => {
  const params = useParams();
  const clickedUserid = params.id;
  // console.log(clickedUsername);
  return (
    <Wrapper>
      <Sidebar />
      <ProfileWrapper>
        <SingleUserProfile id={clickedUserid} />
        <SingleUserProfileTweets id={clickedUserid} />
      </ProfileWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

export default SingleUser;
