import {
  company,
  profile,
  recharge,
  service,
} from "../../../Helper/fetch_helper/apiList";
import {
  FETCH_ALL_SERVICE,
  SET_LOADING,
  FETCH_ALL_OPERATOR,
  FETCH_ALL_WALLET_LIST,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
import { getPlanDetails } from "../../../Helper/fetch_helper/service";

const API_URL = process.env.REACT_APP_FETCH_URL;
// const API_URL = "https://api.badipay.co.in"


export const getAllUserWalletList = (payload) => async (dispatch) => {
  try {
    dispatch(setWalletLoading(true));
    const res = await axios.post(
      API_URL + profile.walletTransactionByUserId.url,
      payload
    );
    if (res) {
      dispatch(setAllWalletList(res?.data?.data));
      dispatch(setWalletLoading(false));
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
  type: SET_LOADING,
  payload: data,
});
