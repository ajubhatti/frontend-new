import { axiosApi } from "../../../Helper/api_helper";
import { FETCH_BANNER_LIST, FETCH_TIKER_LIST, SET_LOADING } from "./actionType";
import { toast } from "react-toastify";
import { home } from "../../../Helper/fetch_helper/apiList";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const fetchBannerList = (cb) => async (dispatch) => {
  try {
    if (!cb) {
      dispatch(setLoading(true));
    }
    const res = await axiosApi.get(API_URL + home.banner.url);

    if (res) {
      if (!cb) {
        dispatch(setBannerList(res?.data?.data));
        dispatch(setLoading(false));
      }
      if (cb) {
        cb(res?.data?.data);
      }
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const fetchTickerList = (cb) => async (dispatch) => {
  try {
    if (!cb) {
      dispatch(setLoading(true));
    }
    const res = await axiosApi.get(API_URL + home.ticker.url);
    if (res) {
      if (!cb) {
        dispatch(setTickerList(res?.data?.data));
        dispatch(setLoading(false));
      }
      if (cb) {
        cb(res?.data?.data);
      }
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const setBannerList = (data) => ({
  type: FETCH_BANNER_LIST,
  payload: data,
});

export const setTickerList = (data) => ({
  type: FETCH_TIKER_LIST,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});
