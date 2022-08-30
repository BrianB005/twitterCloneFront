import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import TweetBody from "./TweetBody";
import TweetButtons from "./TweetButtons";
import TweetStats from "./TweetStats";
const Tweet = ({ _id, user, title, likes, retweets, createdAt, comments }) => {
  return (
    <Wrapper>
      <Profile user={user} time={createdAt} />
      <TweetBody title={title} />
      <TweetStats likes={likes} retweets={retweets} comments={comments} />
      <TweetButtons id={_id} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* background: red; */
  margin: 0, auto;
  border-bottom: 1px solid lightgray;
`;

export default Tweet;
