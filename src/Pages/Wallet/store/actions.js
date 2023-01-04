import {
  company,
  profile,
  recharge,
  service,
} from "../../../Helper/fetch_helper/apiList";
import {
  FETCH_ALL_SERVICE,
  SET_LOADING_WALLET,
  FETCH_ALL_OPERATOR,
  FETCH_ALL_WALLET_LIST,
  SET_PAGE_WALLET,
  SET_SIZE_PER_PAGE_WALLET,
  SET_SEARCH_WALLET,
  SET_SORT_FIELD_WALLET,
  SET_SORT_ORDER_WALLET,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
import { getPlanDetails } from "../../../Helper/fetch_helper/service";

const API_URL = process.env.REACT_APP_FETCH_URL;
// const API_URL = "https://api.badipay.co.in"

export const fetchAllUserWalletList = (payload,cb) => async (dispatch) => {
  try {
    if(!cb){
      dispatch(setWalletLoading(true));
    }
    const res = await axios.post(
      API_URL + profile.walletTransactionByUserId.url,
      payload
    );
    if (res) {
      if(!cb){
      dispatch(setAllWalletList(res?.data?.data));
      dispatch(setWalletLoading(false));
    }
    if(cb){
      cb(res?.data?.data)
    }
    }
  } catch (err) {
    dispatch(setWalletLoading(false));
    toast.error(err);
  }
};

export const setAllWalletList = (data) => ({
  type: FETCH_ALL_WALLET_LIST,
  payload: data,
});

export const setWalletLoading = (data) => ({
  type: SET_LOADING_WALLET,
  payload: data,
});

export const setPerWallet = (data) => ({
  type: SET_PAGE_WALLET,
  payload: data,
});

export const setSizePerPageWallet = (data) => ({
  type: SET_SIZE_PER_PAGE_WALLET,
  payload: data,
});

export const setSearchWallet = (data) => ({
  type: SET_SEARCH_WALLET,
  payload: data,
});

export const setSortFieldOfWallet = (data) => ({
  type: SET_SORT_FIELD_WALLET,
  payload: data,
});

export const setSortOrderOfWallet = (data) => ({
  type: SET_SORT_ORDER_WALLET,
  payload: data,
});
