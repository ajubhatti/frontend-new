import { configData } from "..";
import { fetchUrl } from "../fetchUrl";
import { extra } from "./apiList";

export const generateReferCode = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(extra.refer.method, extra.refer.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
