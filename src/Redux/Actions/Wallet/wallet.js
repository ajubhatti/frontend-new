import { configData } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { profile } from "../../apiList";

export const walletListing = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(
      profile.walletTransaction.method,
      profile.walletTransaction.url,
      data,
      configData
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
