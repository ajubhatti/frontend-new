import { auth } from "../../../Helper/fetch_helper/apiList";
import {
  SET_PROFILE_LOADING,
  SET_PROFILE,
  SET_USERNAME,
  SET_USER_WALLET_DATA,
  SET_USER_WALLET_LISTING,
  SET_USER_TRANSACTION_LISTING,
  FETCH_BANK_LIST,
  GET_ACTIVITY_LOADING,
  GET_ACTIVITY,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
import {
  addMoneyInWallet,
  getAdminBankList,
} from "../../../Helper/fetch_helper/profile";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const fetchProfile = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(API_URL + auth.getUserById.url, payload);

    console.log("res --", res);
    if (res.data?.data) {
      dispatch(setProfileData(res?.data?.data));
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
    dispatch(setLoading(false));
  }
};

export const updateProfile = (payload, cb) => async (dispatch) => {
  try {
    const res = await axios.post(API_URL + auth.updateUser.url, payload);
    if (res.status) {
      if (res.data?.message) {
        dispatch(fetchProfile());
        dispatch(setProfileData(payload));
        toast.success(res.data.message);
        cb(true);
      }
    }
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
    cb(false);
  }
};

export const updateUserPassword = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(API_URL + auth.changePassword.url, payload);
    if (res) {
      dispatch(fetchProfile());
      toast.success(res.data.message);
    }
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const createOrUpdateUserTransactionPin =
  (payload) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        API_URL + auth.changeTransactionPin.url,
        payload
      );
      if (res.status) {
        dispatch(fetchProfile());
        if (res.data?.message) {
          toast.success(res.data.message);
        }
      }
      dispatch(setLoading(false));
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };

export const userWalletData = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(API_URL + auth.userWalletData.url, payload);
    if (res) {
      dispatch(setUserWalletData(res?.data?.data));
      toast.success(res);
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};

export const fetchUserWalletList = (payload) => async (dispatch) => {
  try {
    console.log("user wallet list");
    dispatch(setLoading(true));
    const res = await axios.post(API_URL + auth.userWalletList.url, payload);
    if (res) {
      toast.success(res);
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};

export const fetchUserTransactionsList = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    console.log("user transaction list");
    const res = await axios.post(
      API_URL + auth.userTransactionList.url,
      payload
    );
    if (res) {
      toast.success(res);
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};

export const fetchBankList = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await dispatch(getAdminBankList());
    console.log("res", res);
    if (res) {
      dispatch(setBankList(res));
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};

export const walletBalanceUpdate = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await dispatch(addMoneyInWallet(payload));
    if (res) {
      console.log("res", res);
      toast.success(res.message);
      // dispatch(setBankList(res));
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};

export const getActivityData = (payload) => async (dispatch) => {
  try {
    dispatch(getActiveLogLoading(true));
    console.log("hi");
    const res = await axios.post(API_URL + auth.activityData.url, payload);
    if (res) {
      // toast.success(res);
      dispatch(getActiveLog(res.data.data));
    }
    dispatch(getActiveLogLoading(false));
  } catch (err) {
    dispatch(getActiveLogLoading(false));
    toast.error(err.response?.data?.message || err.message);
  }
};

export const setLoading = (data) => ({
  type: SET_PROFILE_LOADING,
  payload: data,
});

export const setUsername = (data) => ({
  type: SET_USERNAME,
  payload: data,
});

export const setProfileData = (data) => ({
  type: SET_PROFILE,
  payload: data,
});

// update address
export const setUserWalletData = (data) => {
  return {
    type: SET_USER_WALLET_DATA,
    payload: data,
  };
};

export const setUserWalletListing = (data) => {
  return {
    type: SET_USER_WALLET_LISTING,
    payload: data,
  };
};

export const setUserTransactionListing = (data) => {
  return {
    type: SET_USER_TRANSACTION_LISTING,
    payload: data,
  };
};

export const setBankList = (data) => ({
  type: FETCH_BANK_LIST,
  payload: data,
});

export const getActiveLogLoading = (data) => ({
  type: GET_ACTIVITY_LOADING,
  payload: data,
});

export const getActiveLog = (data) => ({
  type: GET_ACTIVITY,
  payload: data,
});
