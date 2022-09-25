import { company, recharge, service } from "../../../Redux/apiList";
import {
  FETCH_ALL_SERVICE,
  SET_LOADING,
  FETCH_ALL_OPERATOR,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";
import { getPlanDetails } from "../../../Redux/Actions/Service/service";

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
    const res = await axios.post(
      API_URL + recharge.rechargeOrBill.url,
      payload
    );

    console.log("res of recharge-------", res);
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
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
