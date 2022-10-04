import { configData } from "..";
import { fetchUrl } from "../fetchUrl";
import LocalStorage, { Crypto, localStorageKey } from "../LocalStorage";
import { auth } from "./apiList";

export const verifyOtp = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.verifyPhone.method, auth.verifyPhone.url, data, configData)
      .then((res) => {
        const resData = res.data ? Crypto.encrypt(res.data) : null;
        LocalStorage.set(localStorageKey.user, resData);
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const resendOtp = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.resendOtp.method, auth.resendOtp.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
