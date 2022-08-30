import axios from "axios";
import {
  CREATE_TWEET_FAIL,
  CREATE_TWEET_REQUEST,
  CREATE_TWEET_SUCCESS,
  GET_CLICKED_USER_TWEETS_FAIL,
  GET_CLICKED_USER_TWEETS_REQUEST,
  GET_CLICKED_USER_TWEETS_SUCCESS,
  GET_TIMELINE_TWEETS_FAIL,
  GET_TIMELINE_TWEETS_REQUEST,
  GET_TIMELINE_TWEETS_SUCCESS,
  GET_USER_TWEETS_FAIL,
  GET_USER_TWEETS_REQUEST,
  GET_USER_TWEETS_SUCCESS,
  LIKE_TWEET_FAIL,
  LIKE_TWEET_REQUEST,
  LIKE_TWEET_SUCCESS,
  RETWEET_TWEET_FAIL,
  RETWEET_TWEET_REQUEST,
  RETWEET_TWEET_SUCCESS,
} from "../constants/tweetConstants";

export const createTweet = (tweet) => async (dispatch, getState) => {
  dispatch({ type: CREATE_TWEET_REQUEST, payload: tweet });
  const userInfo = getState().userSignin;
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/tweets",
      tweet,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    dispatch({ type: CREATE_TWEET_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: CREATE_TWEET_FAIL, payload: failMessage });
  }
};

export const getTimeLineTweets = () => async (dispatch, getState) => {
  const userInfo = getState().userSignin;
  dispatch({ type: GET_TIMELINE_TWEETS_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:5000/api/v1/tweets", {
      headers: {
        authorization: `Bearer ${userInfo?.userInfor?.token}`,
      },
    });
    // console.log(data);
    dispatch({ type: GET_TIMELINE_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: GET_TIMELINE_TWEETS_FAIL, payload: failMessage });
  }
};
export const getCurrentUserTweets = () => async (dispatch, getState) => {
  const userInfo = getState().userSignin;
  dispatch({ type: GET_USER_TWEETS_REQUEST });
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/tweets/${userInfo?.userInfor?.user?._id}`,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    // console.log(data);
    dispatch({ type: GET_USER_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: GET_USER_TWEETS_FAIL, payload: failMessage });
  }
};
export const getClickedUserTweets = (id) => async (dispatch) => {
  // const userInfo = getState().userSignin;
  dispatch({ type: GET_CLICKED_USER_TWEETS_REQUEST, payload: id });
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/tweets/${id}`
    );
    // console.log(data);
    dispatch({ type: GET_CLICKED_USER_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: GET_CLICKED_USER_TWEETS_FAIL, payload: failMessage });
  }
};

export const retweetTweet = (tweetId) => async (dispatch, getState) => {
  dispatch({ type: RETWEET_TWEET_REQUEST, payload: tweetId });
  const userInfo = getState().userSignin;
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/v1/tweets/retweet/${tweetId}`,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    console.log(data);
    dispatch({ type: RETWEET_TWEET_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: RETWEET_TWEET_FAIL, payload: failMessage });
  }
};
export const likeTweet = (tweetId) => async (dispatch, getState) => {
  dispatch({ type: LIKE_TWEET_REQUEST, payload: tweetId });
  const userInfo = getState().userSignin;
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/v1/tweets/like/${tweetId}`,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    console.log(data);
    dispatch({ type: LIKE_TWEET_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: LIKE_TWEET_FAIL, payload: failMessage });
  }
};
