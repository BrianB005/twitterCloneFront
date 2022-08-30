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

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfor: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const followUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
      return { ...state, loading: true };

    case FOLLOW_USER_SUCCESS:
      return { ...state, loading: false, success: true };
    case FOLLOW_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const unfollowUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UNFOLLOW_USER_REQUEST:
      return { ...state, loading: true };

    case UNFOLLOW_USER_SUCCESS:
      return { ...state, loading: false, success: true };
    case UNFOLLOW_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfor: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const getAllUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload.users };

    case GET_ALL_USERS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export const searchUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_USERS_REQUEST:
      return { ...state, loading: true };
    case SEARCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload.users };

    case SEARCH_USERS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.user };
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
