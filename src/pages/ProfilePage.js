import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import MyProfile from "./MyProfile";
import ProfileTweets from "./ProfileTweets";
const ProfilePage = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <MyProfile />
        <ProfileTweets />
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ProfilePage;
