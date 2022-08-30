import React from "react";
import styled from "styled-components";
const TweetStats = ({ likes, comments, retweets }) => {
  return (
    <Wrapper>
      <Text>
        <span>{comments?.length}</span>
        comments
      </Text>

      <Text>
        <span>{retweets?.length}</span>
        {retweets?.length === 1 ? "retweet" : "retweets"}
      </Text>
      <Text>
        <span>{likes?.length}</span>
        {likes?.length === 1 ? "like" : "likes"}
      </Text>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 10px 60px 0;
  display: flex;
`;
const Text = styled.h4`
  color: gray;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  font-weight: 400;
  margin-right: 20px;
  span {
    color: black;
    font-size: 13px;
    margin-right: 3px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
export default TweetStats;
