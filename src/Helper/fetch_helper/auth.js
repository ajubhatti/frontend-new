import { config, configData } from "..";
import { fetchUrl } from "../fetchUrl";
import LocalStorage, { Crypto, localStorageKey } from "../LocalStorage";
import { auth } from "./apiList";

export const login = (data) => () =>
  new Promise(async (resolve, reject) => {
    await fetchUrl(auth.login.method, auth.login.url, data, configData)
      .then((res) => {
        const resData = res.data ? Crypto.encrypt(res.data) : null;
        LocalStorage.set(localStorageKey.user, resData);

        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const register = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.register.method, auth.register.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const logOut = () => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.logout.method, auth.logout.url, null, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const forgotPassword = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.forgotPass.method, auth.forgotPass.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const resetPassword = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.resetPass.method, auth.resetPass.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const verify = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.verifyEmail.method, auth.verifyEmail.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const getRefererUser = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.referer.method, auth.referer.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const stateListing = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.state.method, auth.state.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const updatePassword = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      auth.changePassword.method,
      auth.changePassword.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const updateTransactionPin = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      auth.changeTransactionPin.method,
      auth.changeTransactionPin.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
