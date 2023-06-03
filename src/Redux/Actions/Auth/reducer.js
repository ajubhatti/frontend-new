import produce from "immer";
import {
  SET_ERROR,
  SET_PROFILE,
  LOGOUT,
  SET_LOADING,
  SET_TOKEN,
  SET_IS_AUTH,
  SET_STATE_DATA,
  SET_USER_DETAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionTypes";

const initialState = {
  user: null,
  token: "",
  error: "",
  loading: false,
  isAuth: false,
  stateList: [],
  userDetails: null,
};

const authReducer = produce((state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR:
      state.error = payload;
      break;
    case SET_PROFILE:
      state.user = payload;
      state.isAuth = true;
      break;
    case SET_TOKEN:
      state.token = payload;
      break;
    case LOGOUT:
      state.user = null;
      state.token = "";
      state.isAuth = false;
      state.isLoggedIn = false;
      break;
    case SET_LOADING:
      state.loading = payload;
      break;
    case SET_IS_AUTH:
      state.isAuth = payload;
      break;
    case SET_STATE_DATA:
      state.stateList = payload;
      break;
    case SET_USER_DETAIL:
      state.userDetails = payload;
      break;
    // ====================================
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    // ====================================

    default:
      return state;
  }
});

export default authReducer;
