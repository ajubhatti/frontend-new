import { configData } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { extra } from "../../apiList";

export const supportListing = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(extra.support.method, extra.support.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
