import { axiosApi } from "../../../Helper/api_helper";
import routes from "../../../Helper/routes";
import { serviceListing } from "../../../Redux/Actions/Service/service";
import { service } from "../../../Redux/apiList";
import {
  FETCH_ALL_SERVICE,
  FETCH_ALL_SERVICE_SUCCESS,
  FETCH_ALL_SERVICE_ERROR,
  SET_LOADING,
} from "./actionTypes";

import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const getAllServices = (payload) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(API_URL + "/" + service.service.url);
    if (res) {
      dispatch(setAllService(res?.data?.data));
      dispatch(setLoading(false));
    }
  } catch (err) {
    dispatch(setLoading(false));
    toast.error(err);
  }
};

export const setAllService = (data) => ({
  type: FETCH_ALL_SERVICE,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});
