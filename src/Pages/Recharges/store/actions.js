import axios from "axios";
import { toast } from "react-toastify";
import { auth, recharge } from "../../../Helper/fetch_helper/apiList";
import {
  SET_LOADING_RECHARGES,
  FETCH_ALL_RECHARGE_LIST,
  SET_PAGE_RECHARGE,
  SET_SIZE_PER_PAGE_RECHARGE,
  SET_SEARCH_RECHARGE,
  SET_SORT_FIELD_RECHARGE,
  SET_SORT_ORDER_RECHARGE,
} from "./actionTypes";
import { axiosApi } from "../../../Helper/api_helper";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const fetchAllUserRechargeList = (payload, cb) => async (dispatch) => {
  try {
    if (!cb) {
      dispatch(setRechargeLoading(true));
    }
    const res = await axiosApi.post(API_URL + recharge.listById.url, payload);
    if (res) {
      if (!cb) {
        dispatch(setAllRechargeList(res?.data?.data));
        dispatch(setRechargeLoading(false));
      }
      if (cb) {
        cb(res?.data?.data);
      }
    }
  } catch (err) {
    dispatch(setRechargeLoading(false));
    toast.error(err.response?.data?.message || err.message);
  }
};

export const rechargeComplaints = (data, cb) => async (dispatch) => {
  try {
    if (!cb) {
      dispatch(setRechargeLoading(true));
    }
    const res = await axiosApi.post(
      API_URL + recharge.createComplain.url,
      data
    );
    if (res) {
      if (!cb) {
        dispatch(setRechargeLoading(false));
      }
      if (cb) {
        cb(res?.data);
      }
    }
  } catch (err) {
    dispatch(setRechargeLoading(false));
    toast.error(err.response?.data?.message || err.message);
  }

  try {
    await rechargeComplaintService
      .createRechargeComplaints(data)
      .then((res) => {
        if (res?.data) {
          cb(res);
        }
      });
  } catch (err) {
    dispatch(setRechargeLoading(false));
  }
};

export const setAllRechargeList = (data) => ({
  type: FETCH_ALL_RECHARGE_LIST,
  payload: data,
});

export const setRechargeLoading = (data) => ({
  type: SET_LOADING_RECHARGES,
  payload: data,
});

export const setPageRecharge = (data) => ({
  type: SET_PAGE_RECHARGE,
  payload: data,
});

export const setSizePerPageRecharge = (data) => ({
  type: SET_SIZE_PER_PAGE_RECHARGE,
  payload: data,
});

export const setSearchRecharge = (data) => ({
  type: SET_SEARCH_RECHARGE,
  payload: data,
});

export const setSortFieldOfRecharge = (data) => ({
  type: SET_SORT_FIELD_RECHARGE,
  payload: data,
});

export const setSortOrderOfRecharge = (data) => ({
  type: SET_SORT_ORDER_RECHARGE,
  payload: data,
});
