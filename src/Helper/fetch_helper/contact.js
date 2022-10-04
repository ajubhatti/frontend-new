import { configData } from "..";
import { fetchUrl } from "../fetchUrl";
import { extra } from "./apiList";

export const sendContactDetails = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(extra.contact.method, extra.contact.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
