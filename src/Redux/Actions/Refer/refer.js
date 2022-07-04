import { configData } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { extra } from "../../apiList";

export const generateReferCode = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(extra.refer.method, extra.refer.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
