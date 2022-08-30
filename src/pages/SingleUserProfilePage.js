import React, { useEffect } from "react";
import styled from "styled-components";
import { BiCalendarEvent } from "react-icons/bi";
import { GiBalloons } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

import {
  followuser,
  getUser,
  unfollowuser,
} from "../redux/actions/userActions";

const SingleUserProfile = ({ id }) => {
  const clickedUser = useSelector((state) => state.user);
  const userInfo = useSelector((state) => state.userSignin);
  // const follow = useSelector((state) => state.follow);

  const currentUserFollowing = userInfo?.userInfor?.user.following;
  const dispatch = useDispatch();
  const { loading } = clickedUser;
  const user = clickedUser?.user;

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);
  const {
    _id,
    name,
    username,
    residence,
    birthday,
    followers,
    following,
    createdAt,
    description,
  } = user;
  if (loading) {
    return <Loading>Loading......</Loading>;
  }
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
          Born {new Date(birthday).toDateString()}
        </Birthday>
        <Joined>
          <span>
            <BiCalendarEvent />
          </span>{" "}
          Joined {new Date(createdAt).toDateString()}
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
      {currentUserFollowing.includes(_id) ? (
        <Follow onClick={() => dispatch(unfollowuser(_id))}>Unfollow</Follow>
      ) : (
        <Follow onClick={() => dispatch(followuser(_id))}>Follow</Follow>
      )}
    </Wrapper>
  );
};
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
const Follow = styled.button`
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
  margin-bottom: 10px;
  align-items: center;
  margin-top: 13px;
`;

const Location = styled.div`
  display: flex;
  margin-right: 6px;
  span {
    font-size: 12px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const Birthday = styled.div`
  margin-right: 6px;
  flex-wrap: nowrap;
  display: flex;
  span {
    font-size: 12px;
  }
`;
const Joined = styled.div`
  margin-right: 6px;
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

export default SingleUserProfile;
