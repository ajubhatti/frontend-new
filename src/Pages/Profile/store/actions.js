import { auth, recharge, service } from "../../../Helper/fetch_helper/apiList";
import {
  FETCH_ALL_SERVICE,
  SET_LOADING,
  FETCH_ALL_OPERATOR,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
const API_URL = process.env.REACT_APP_FETCH_URL + "/auth";

export const updateUserPassword = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(API_URL + auth.changePassword.url, payload);
    if (res) {
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const updateUserTransactionPin = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(
      API_URL + recharge.rechargeOrBill.url,
      payload
    );

    if (res.data) {
      dispatch(setLoading(false));
      toast.success(
        res?.data?.data?.responseData?.TRNSTATUSDESC || res?.data?.data?.status
      );
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});
