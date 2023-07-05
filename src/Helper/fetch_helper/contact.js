import { toast } from "react-toastify";
import { configData } from "..";
import { axiosApi } from "../api_helper";
import { fetchUrl } from "../fetchUrl";
import { extra } from "./apiList";

const API_URL = process.env.REACT_APP_FETCH_URL;

export const sendContactDetails = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(extra.contact.method, extra.contact.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const addContactDetails = (payload, cb) => async () => {
  try {
    const res = await axiosApi.post(API_URL + extra.contact.url, payload);
    if (res) {
      if (cb) {
        cb(res?.data?.data);
      }
    }
  } catch (err) {
    toast.error(err);
  }
};
