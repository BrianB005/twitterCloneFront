import axios from "axios";
import {
  FOLLOW_USER_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SEARCH_USERS_FAIL,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  UNFOLLOW_USER_FAIL,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      {
        name,
        email,
        password,
      }
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfor", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      {
        email,
        password,
      }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfor", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const signout = () => async (dispatch) => {
  await axios.post("http://localhost:5000/api/v1/auth/logout");
  localStorage.removeItem("userInfor");

  dispatch({ type: USER_SIGNOUT });
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_REQUEST });
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/users/allUsers"
    );
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const searchUsers = (searchTerm) => async (dispatch) => {
  dispatch({ type: SEARCH_USERS_REQUEST, payload: searchTerm });
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/users/search?search_query=${searchTerm}`
    );
    dispatch({ type: SEARCH_USERS_SUCCESS, payload: data });
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_USERS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const followuser = (userId) => async (dispatch, getState) => {
  const userInfo = getState().userSignin;
  // console.log(userInfo.userInfor.token);
  dispatch({ type: FOLLOW_USER_REQUEST, payload: userId });
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/v1/users/${userId}/follow`,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FOLLOW_USER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const unfollowuser = (userId) => async (dispatch, getState) => {
  const userInfo = getState().userSignin;
  dispatch({ type: UNFOLLOW_USER_REQUEST, payload: userId });
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/v1/users/${userId}/unfollow`,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UNFOLLOW_USER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const getUser = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST, payload: id });
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/users/find/${id}`
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
