import React, { useEffect } from "react";
import styled from "styled-components";
import Tweet from "../components/Tweet";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loading";
import { getTimeLineTweets } from "../redux/actions/tweetActions";
import Pusher from "pusher-js";
const Tweets = () => {
  const { loading, tweets, error } = useSelector(
    (state) => state.timelineTweets
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const pusher = new Pusher("a3d854d3328b34d2a854", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("tweets");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    dispatch(getTimeLineTweets());
  }, [dispatch]);
  if (tweets?.length < 1) {
    return (
      <Container>
        Welcome to this amazing app full of great people!Follow your friends to
        view their tweets and have them view yours.
        <br /> Start adding friends now!
        <br />
        Add tweets above.
      </Container>
    );
  }
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
  width: 400px;
  margin: 18vh auto 0;
  justify-content: center;
`;
const Text = styled.h1`
  color: cyan;
`;
const Container = styled.div`
  font-size: 19px;
  margin-top: 50px;
  max-width: 300px;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
export default Tweets;
