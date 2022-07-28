import { configData } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { service } from "../../apiList";

export const serviceListing = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(service.service.method, service.service.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const serviceAmbicaAll = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      service.serviceProviderAll.method,
      service.serviceProviderAll.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

export const serviceProvider = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      service.serviceProvider.method,
      service.serviceProvider.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
