import React, { useEffect } from "react";
import Tweet from "../components/Tweet";
import Loader from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserTweets } from "../redux/actions/tweetActions";
import styled from "styled-components";
const ProfileTweets = () => {
  const { loading, error, tweets } = useSelector(
    (state) => state.currentUserTweets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserTweets());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return (
      <Error>
        <Text>Something went wrong.....Reload the page to fix this..</Text>
      </Error>
    );
  }
  // console.log(tweets);
  if (tweets?.length < 1) {
    return (
      <Container>
        Welcome to this amazing app full of great people!Follow your friends to
        view their tweets. Start adding friends now!
      </Container>
    );
  }

  return (
    <>
      {tweets?.map((tweet) => (
        <Tweet key={tweet._id} {...tweet} />
      ))}
    </>
  );
};
const Error = styled.div`
  display: flex;
  height: 100vh;
  max-width: 400px;
  margin: 18vh auto 0;
  justify-content: center;
`;
const Text = styled.h1`
  color: cyan;
`;
const Container = styled.div`
  margin-top: 50px;
  max-width: 300px;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
export default ProfileTweets;
