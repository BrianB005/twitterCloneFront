import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  createTweetReducer,
  getClickedUserTweetsReducer,
  getCurrentUserTweetsReducer,
  getTimeLineTweetsReducer,
  likeTweetReducer,
  retweetTweetReducer,
} from "./reducers/tweetReducers";
import {
  followUserReducer,
  getAllUsersReducer,
  getUserReducer,
  searchUsersReducer,
  unfollowUserReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
const reducer = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
  createTweet: createTweetReducer,
  timelineTweets: getTimeLineTweetsReducer,
  retweetTweet: retweetTweetReducer,
  likeTweet: likeTweetReducer,
  currentUserTweets: getCurrentUserTweetsReducer,
  clickedUserTweets: getClickedUserTweetsReducer,
  allUsers: getAllUsersReducer,
  searchedUsers: searchUsersReducer,
  follow: followUserReducer,
  unfollow: unfollowUserReducer,
  user: getUserReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  userSignin: {
    userInfor: localStorage.getItem("userInfor")
      ? JSON.parse(localStorage.getItem("userInfor"))
      : null,
  },
};
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
