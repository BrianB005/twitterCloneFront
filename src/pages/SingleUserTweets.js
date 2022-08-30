import React, { useEffect } from "react";
import Tweet from "../components/Tweet";
// import Loader from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getClickedUserTweets } from "../redux/actions/tweetActions";
import styled from "styled-components";
const SingleUserProfileTweets = ({ id }) => {
  const { loading, error, tweets } = useSelector(
    (state) => state.clickedUserTweets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClickedUserTweets(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading>Loading.....</Loading>;
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
      <h2 style={{ marginTop: 60, marginLeft: 30 }}>
        This user hasn't made any posts yet..
      </h2>
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
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
export default SingleUserProfileTweets;
