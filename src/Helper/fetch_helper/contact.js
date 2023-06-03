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
  console.log({ payload });
  try {
    console.log({ payload });
    const res = await axiosApi.post(API_URL + extra.contact.url, payload);
    console.log("callin");

    console.log({ res });
    if (res) {
      if (cb) {
        cb(res?.data?.data);
      }
    }
  } catch (err) {
    console.log({ err });
    toast.error(err);
  }
};
