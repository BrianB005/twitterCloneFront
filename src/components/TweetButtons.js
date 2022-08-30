import React, { useState } from "react";
import styled from "styled-components";

import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineRetweet,
} from "react-icons/ai";
import { BsBookmarkPlus, BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { likeTweet, retweetTweet } from "../redux/actions/tweetActions";
const TweetButtons = ({ id }) => {
  const { tweets } = useSelector((state) => state.timelineTweets);
  const currentUserId = useSelector(
    (state) => state.userSignin?.userInfor?.user?._id
  );
  const hasUserLiked = tweets?.likes?.includes(currentUserId);

  const hasUserRetweeted = () => tweets?.retweets?.includes(currentUserId);
  const [liked, setLiked] = useState(hasUserLiked);
  const [retweeted, setRetweeted] = useState(hasUserRetweeted());

  const dispatch = useDispatch();
  const handleRetweet = () => {
    setRetweeted(!retweeted);
    dispatch(retweetTweet(id));
  };
  const handleLike = () => {
    setLiked(!liked);
    dispatch(likeTweet(id));
  };
  return (
    <Wrapper>
      <Icon>
        <AiOutlineMessage />
        <Text>Comment</Text>
      </Icon>
      <RetweetIcon retweeted={retweeted} onClick={handleRetweet}>
        <AiOutlineRetweet />
        <Text>{retweeted ? "Cancel" : "Retweet"}</Text>
      </RetweetIcon>
      <LikeIcon onClick={handleLike}>
        {liked ? (
          <BsFillHeartFill style={{ color: "rgb(225, 45, 46)" }} />
        ) : (
          <AiOutlineHeart />
        )}
        <Text>{liked ? "Unlike" : "Like"}</Text>
      </LikeIcon>
      <Icon>
        <BsBookmarkPlus />
        <Text>Bookmark</Text>
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px 60px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.h6`
  position: absolute;
  left: -8px;
  color: gray;
  transition: all 0.5s linear;
  display: none;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 17px;
  position: relative;
  &:hover {
    ${Text} {
      display: block;
    }
  }
`;
const LikeIcon = styled.div`
  cursor: pointer;
  font-size: 18px;
  position: relative;
  &:hover {
    ${Text} {
      display: block;
    }
  }
`;
const RetweetIcon = styled.div`
  cursor: pointer;
  font-size: 17px;
  color: ${(props) => props.retweeted === true && "rgb(38, 252, 124)"};
  position: relative;
  &:hover {
    ${Text} {
      display: block;
    }
  }
`;

export default TweetButtons;
