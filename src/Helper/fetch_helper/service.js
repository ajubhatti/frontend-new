import { configData } from "..";
import { service } from "./apiList";
import { fetchUrl } from "../fetchUrl";

export const serviceListing = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(service.service.method, service.service.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const getPlanDetails = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(service.getMplan.method, service.getMplan.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
