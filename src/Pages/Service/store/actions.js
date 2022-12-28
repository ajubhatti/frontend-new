import {
  company,
  recharge,
  service,
} from "../../../Helper/fetch_helper/apiList";
import {
  FETCH_ALL_SERVICE,
  SET_LOADING,
  FETCH_ALL_OPERATOR,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
import { getPlanDetails } from "../../../Helper/fetch_helper/service";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const getAllServices = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(API_URL + service.service.url);
    if (res) {
      dispatch(setAllService(res?.data?.data));
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const getAllOperators = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(API_URL + company.company.url);
    if (res) {
      dispatch(setAllOperator(res?.data?.data));
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const getPlans = (payload) => async (dispatch) => {
  try {
    dispatch(getPlanDetails(payload));
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const doMyRecharge = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(
      API_URL + recharge.rechargeOrBill.url,
      payload
    );
    console.log("res ----", res.data);
    if (res.data) {
      dispatch(setLoading(false));
      toast.success(
        res?.data?.data?.responseData?.TRNSTATUSDESC || res?.data?.data?.status
      );
    }
  } catch (err) {
    console.log(err);
    dispatch(setLoading(false));
    toast.error(err?.response?.data?.message || "Something went wrong!");
  }
};

export const setAllService = (data) => ({
  type: FETCH_ALL_SERVICE,
  payload: data,
});

export const setAllOperator = (data) => ({
  type: FETCH_ALL_OPERATOR,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});
