import axios from "axios";
import { toast } from "react-toastify";
import { auth } from "../../../Helper/fetch_helper/apiList";
import {
  SET_LOADING_TRANSACTION,
  FETCH_ALL_TRANSACTION_LIST,
  SET_PAGE_TRANSACTION,
  SET_SIZE_PER_PAGE_TRANSACTION,
  SET_SEARCH_TRANSACTION,
  SET_SORT_FIELD_TRANSACTION,
  SET_SORT_ORDER_TRANSACTION,
} from "./actionTypes";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const fetchAllUserTransactionList = (payload) => async (dispatch) => {
  try {
    dispatch(setTransactionLoading(true));
    const res = await axios.post(API_URL + auth.transactions.url, payload);
    if (res) {
      dispatch(setAllTransactionList(res?.data?.data));
      dispatch(setTransactionLoading(false));
    }
  } catch (err) {
    dispatch(setTransactionLoading(false));
    toast.error(err.response?.data?.message || err.message);
  }
};

export const setAllTransactionList = (data) => ({
  type: FETCH_ALL_TRANSACTION_LIST,
  payload: data,
});

export const setTransactionLoading = (data) => ({
  type: SET_LOADING_TRANSACTION,
  payload: data,
});

export const setPerTransaction = (data) => ({
  type: SET_PAGE_TRANSACTION,
  payload: data,
});

export const setSizePerPageTransaction = (data) => ({
  type: SET_SIZE_PER_PAGE_TRANSACTION,
  payload: data,
});

export const setSearchTransaction = (data) => ({
  type: SET_SEARCH_TRANSACTION,
  payload: data,
});

export const setSortFieldOfTransaction = (data) => ({
  type: SET_SORT_FIELD_TRANSACTION,
  payload: data,
});

export const setSortOrderOfTransaction = (data) => ({
  type: SET_SORT_ORDER_TRANSACTION,
  payload: data,
});
