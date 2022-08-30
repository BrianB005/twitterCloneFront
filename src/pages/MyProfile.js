import React from "react";
import styled from "styled-components";
import { BiCalendarEvent } from "react-icons/bi";
import { GiBalloons } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";
const MyProfile = () => {
  const userInfo = useSelector((state) => state.userSignin);
  const {
    name,
    username,
    description,
    birthday,
    createdAt,
    residence,
    followers,
    following,
  } = userInfo?.userInfor?.user;
  return (
    <Wrapper>
      <CoverImage />
      <ProfilePic>
        <Image src="https://pbs.twimg.com/profile_images/1344485509154754560/J_jsGpPY_400x400.jpg" />
      </ProfilePic>
      <Name>{name}</Name>
      <Username>
        <span>@</span>
        {username}
      </Username>
      {description && <Description>{description}</Description>}
      <DetailsWrapper>
        <Location>
          <span>
            <GoLocation />
          </span>
          {residence}
        </Location>
        <Birthday>
          <span>
            <GiBalloons />
          </span>{" "}
          {birthday}
        </Birthday>
        <Joined>
          <span>
            <BiCalendarEvent />
          </span>{" "}
          {new Date(createdAt).toDateString()}
        </Joined>
      </DetailsWrapper>
      <DetailsWrapper>
        <Followers>
          <span>{following?.length}</span> Following
        </Followers>
        <Followers>
          <span>{followers?.length}</span>{" "}
          {followers.length < 2 ? "Follower" : "Followers"}
        </Followers>
      </DetailsWrapper>
      <EditButton>Edit profile</EditButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 500px; */
  margin: 0 auto;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  position: relative;
  padding-left: 13px;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.div`
  width: 100%;
  background: cyan;
  height: 150px;
`;
const ProfilePic = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 120px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const Name = styled.h4`
  margin-top: 42px;
  width: 50%;
  &:hover {
    text-decoration: underline;
  }
`;
const Username = styled.h5`
  font-weight: 400;
  span {
    margin-right: 2px;
  }
`;
const EditButton = styled.button`
  background: cyan;
  border: none;
  padding: 8px 18px;
  border-radius: 19px;
  cursor: pointer;
  position: absolute;
  right: 13px;
  top: 163px;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.8;
  }
`;

const Description = styled.div`
  margin: 20px 0;
`;
const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;
  span {
    font-size: 12px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const Birthday = styled.div`
  align-items: center;
  margin-right: 6px;
  span {
    font-size: 12px;
  }
`;
const Joined = styled.div`
  margin-right: 6px;
  align-items: center;
  span {
    font-size: 12px;
  }
`;

const Followers = styled.div`
  margin-right: 15px;
  &:hover {
    text-decoration: underline;
  }
  span {
    color: black;
  }
`;

export default MyProfile;
