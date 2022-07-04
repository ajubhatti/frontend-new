import { configData, config } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { home } from "../../apiList";

export const getBanner = () => () =>
  new Promise((resolve, reject) => {
    fetchUrl(home.banner.method, home.banner.url, null, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });


export const getTicker = () => () =>
  new Promise((resolve, reject) => {
    fetchUrl(home.ticker.method, home.ticker.url, null, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });