import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { followuser, unfollowuser } from "../redux/actions/userActions";

const User = ({ _id, name, username, createdAt }) => {
  const userInfo = useSelector((state) => state.userSignin);
  // const follow = useSelector((state) => state.follow);

  const currentUserFollowing = userInfo?.userInfor?.user.following;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <ImageContainer>
        <Image src="https://pbs.twimg.com/profile_images/1344485509154754560/J_jsGpPY_400x400.jpg" />
      </ImageContainer>
      <Link to={`/searchFriends/${_id}`}>
        <Name>{name}</Name>
        <Username>@ {username}</Username>
      </Link>
      {/* <Followers>
        <span>{followers?.length}</span> Followers
      </Followers>
      <Followers>
        <span>{following?.length}</span> Following
      </Followers> */}
      <Joined>Joined: {new Date(createdAt).toDateString()}</Joined>
      {currentUserFollowing.includes(_id) ? (
        <Button onClick={() => dispatch(unfollowuser(_id))}>Unfollow</Button>
      ) : (
        <Button onClick={() => dispatch(followuser(_id))}>Follow</Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  width: 98vw;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  max-width: 450px;
  border-bottom: 1px solid lightgray;
`;

const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const Name = styled.h4`
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
const Username = styled.h5`
  font-weight: 400;
  margin-right: 9px;
  span {
    margin-right: 2px;
  }
`;
const Joined = styled.div`
  margin-right: 6px;
  font-size: 12px;
  span {
    font-size: 12px;
  }
`;

// const Followers = styled.div`
//   margin-right: 15px;
//   &:hover {
//     text-decoration: underline;
//   }
//   span {
//     color: black;
//   }
// `;
const Button = styled.button`
  padding: 6px 13px;
  border-radius: 4px;
  background: cyan;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default User;
