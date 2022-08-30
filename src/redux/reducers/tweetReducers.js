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

export const createTweetReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TWEET_REQUEST:
      return { ...state, loading: true };
    case CREATE_TWEET_SUCCESS:
      return { ...state, loading: false, success: true };
    case CREATE_TWEET_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getTimeLineTweetsReducer = (state = {}, action) => {
  // console.log(action.payload?.timelineTweets);
  switch (action.type) {
    case GET_TIMELINE_TWEETS_REQUEST:
      return { ...state, loading: true };
    case GET_TIMELINE_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload.timelineTweets,
      };
    case GET_TIMELINE_TWEETS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getCurrentUserTweetsReducer = (state = {}, action) => {
  // console.log(action.payload?.timelineTweets);
  switch (action.type) {
    case GET_USER_TWEETS_REQUEST:
      return { ...state, loading: true };
    case GET_USER_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload.tweets,
      };
    case GET_USER_TWEETS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getClickedUserTweetsReducer = (state = {}, action) => {
  // console.log(action.payload?.timelineTweets);
  switch (action.type) {
    case GET_CLICKED_USER_TWEETS_REQUEST:
      return { ...state, loading: true };
    case GET_CLICKED_USER_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload.tweets,
      };
    case GET_CLICKED_USER_TWEETS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const retweetTweetReducer = (state = {}, action) => {
  switch (action.type) {
    case RETWEET_TWEET_REQUEST:
      return { ...state, loading: true };
    case RETWEET_TWEET_SUCCESS:
      return { ...state, success: true, loading: false };

    case RETWEET_TWEET_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
export const likeTweetReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_TWEET_REQUEST:
      return { ...state, loading: true };
    case LIKE_TWEET_SUCCESS:
      return { ...state, success: true, loading: false };

    case LIKE_TWEET_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
