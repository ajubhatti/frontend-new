import axios from "axios";
import { auth } from "../../apiList";
import {
  LOGOUT,
  SET_AUTH_DATA,
  SET_TOKEN,
  SET_TOKEN_LOADING,
  SET_TOKEN_ERROR,
  SET_PROFILE,
  SET_IS_AUTH,
  SET_STATE_DATA,
} from "./actionTypes";
import { stateListing } from "./auth";
const API_URL = process.env.REACT_APP_FETCH_URL;
// import { ACCESS_TOKEN_URL, GET_PROFILE_INFO } from "constants/urls";
// import { axiosAccount } from "services/api";

// import { fetchSites } from "store/actions";

// export const fetchProfile = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       const res = await axiosAccount.get(GET_PROFILE_INFO);
//       if (res.data?.data?.user) {
//         dispatch(setProfileData(res.data.data.user));
//       }
//       dispatch(setLoading(false));
//     } catch (err) {
//       dispatch(setError(err.response?.data?.message || err.message));
//       dispatch(setLoading(false));
//     }
//   };
// };

// export const setProfileData = (data) => ({
//   type: SET_PROFILE,
//   payload: data,
// });

// export const fatchAccessToken = (data, cb) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       const res = await axiosAccount.post(ACCESS_TOKEN_URL, data);
//       if (res.data?.data) {
//         dispatch(setToken(res.data.data.token));
//         dispatch(fetchProfile());
//         dispatch(fetchSites());
//         dispatch(setIsAuth(true));
//         cb();
//       }
//       dispatch(setLoading(false));
//     } catch (err) {
//       dispatch(setError(err.response?.data?.message || err.message));
//       dispatch(setLoading(false));
//     }
//   };
// };

export const getStateList = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(API_URL + auth.state.url);
    if (res) {
      console.log("res.data.data :>> ", res?.data?.data);
      dispatch(setStateList(res?.data?.data));
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err));
  }
};

export const setAuthData = (data) => ({
  type: SET_AUTH_DATA,
  payload: data,
});

export const setToken = (data) => ({
  type: SET_TOKEN,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setLoading = (data) => ({
  type: SET_TOKEN_LOADING,
  payload: data,
});

export const setError = (message) => ({
  type: SET_TOKEN_ERROR,
  payload: message,
});

export const setIsAuth = (data) => ({
  type: SET_IS_AUTH,
  payload: data,
});

export const setStateList = (data) => ({
  type: SET_STATE_DATA,
  payload: data,
});
