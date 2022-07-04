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