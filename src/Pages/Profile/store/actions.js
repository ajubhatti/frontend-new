import { auth, wallet } from "../../../Helper/fetch_helper/apiList";
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
  GET_TYPE_LOADING,
  GET_TYPE,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
import {
  addMoneyInWallet,
  getAdminBankList,
} from "../../../Helper/fetch_helper/profile";
import LocalStorage, {
  Crypto,
  getUser,
  localStorageKey,
} from "../../../Helper/LocalStorage";

const getUserData = getUser();

const API_URL = process.env.REACT_APP_FETCH_URL;
// const API_URL = "https://api.badipay.co.in"

export const fetchProfile = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(API_URL + auth.getUserById.url, payload);

    if (res.data?.data) {
      const resData = res.data ? Crypto.encrypt(res.data.data) : null;
      LocalStorage.set(localStorageKey.user, resData);
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
        dispatch(fetchProfile({ id: getUserData.id }));
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

export const updateUserPassword = (payload, cb) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await axios.post(API_URL + auth.changePassword.url, payload);
    if (res) {
      dispatch(fetchProfile({ id: getUserData.id }));
      toast.success(res.data.message);
      cb(res.data);
    }
    dispatch(setLoading(false));
  } catch (err) {
    cb(err);
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
        dispatch(fetchProfile({ id: getUserData.id }));
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
    if (res) {
      dispatch(setBankList(res));
    }
    dispatch(setLoading(false));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};

export const walletBalanceUpdate = (payload, cb) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await dispatch(addMoneyInWallet(payload));
    if (res) {
      toast.success(res.message);
      cb(res);
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
    const res = await axios.post(API_URL + auth.transactions.url, payload);
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

export const fetchType = () => async (dispatch) => {
  try {
    dispatch(getTypeLoading(true));
    const res = await axios.get(API_URL + wallet.type.url);
    if (res) {
      // toast.success(res);
      dispatch(getType(res.data.data));
    }
    dispatch(getTypeLoading(false));
  } catch (err) {
    dispatch(getTypeLoading(false));
    toast.error(err.response?.data?.message || err.message);
  }
};

export const handleAddAndChangePin = (payload, cb) => async (dispatch) => {
  try {
    const res = await axios.post(
      API_URL + "/auth/changeTransactionPin",
      payload
    );
    if (res) {
      dispatch(setProfileData(res?.data?.data));
      cb(res);
    }
  } catch (err) {
    toast.error(err.response?.data?.message);
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

export const getTypeLoading = (data) => ({
  type: GET_TYPE_LOADING,
  payload: data,
});

export const getType = (data) => ({
  type: GET_TYPE,
  payload: data,
});
