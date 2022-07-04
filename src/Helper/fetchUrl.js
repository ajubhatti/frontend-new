import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";
import LocalStorage, { getToken } from "./LocalStorage";
import routes from "./routes";

const baseUrl = process.env.REACT_APP_FETCH_URL;

const GET = "GET";
const DELETE = "DELETE";
const POST = "POST";
const PUT = "PUT";

let cache = [];
const cancel = [];
const ACTION_HANDLERS = {
  [GET]: (url, data) => {
    let queryUrl = url;
    if (data !== undefined) {
      const query = qs.stringify(data);
      queryUrl = `${queryUrl}?${query}`;
    }
    return axios.get(baseUrl + queryUrl, {
      cancelToken: new axios.CancelToken((c) => {
        cancel.push({ url, c });
      }),
    });
  },
  [DELETE]: (url, data) => axios.delete(baseUrl + url, { data }),
  [POST]: (url, data) => axios.post(baseUrl + url, data),
  [PUT]: (url, data) => axios.put(baseUrl + url, data),
};

export const setHeaders = (contentType, authToken) => {
  // set Login token
  if (authToken) {
    const token = getToken();
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }

  // set contentType
  if (contentType) {
    axios.defaults.headers.post["Content-Type"] = contentType;
    axios.defaults.headers.post.Accept = "application/json";
  } else {
    delete axios.defaults.headers.post["Content-Type"];
  }
};

export const showErrorAsToast = (error, { type }) => {
  if (
    error.response &&
    Object.prototype.hasOwnProperty.call(error.response, "data")
  ) {
    const value = error.response.data;
    if (Object.prototype.hasOwnProperty.call(value, "errors")) {
      const { errors } = value;
      Object.keys(errors).forEach((x) => {
        Object.keys(errors[x]).forEach((y) => {
          toast.alert(errors[x][y]);
        });
      });
    }
    if (error.response && error.response.status === 401) {
      setTimeout(() => {
        LocalStorage.clean();
        window.location.href = routes.login;
      }, 3000);
    }
    if (value.message !== undefined) {
      if (typeof value.message === "string") {
        toast.alert(value.message);
      } else {
        return Promise.reject(value.message);
      }
    }
  } else if (type.toUpperCase() !== "GET") {
    toast.alert("Something went wrong, Please do try again !");
  }

  if (Object.prototype.hasOwnProperty.call(error.response, "data")) {
    const value = error.response.data;
    if (value.data) {
      if (Object.prototype.hasOwnProperty.call(value.data, "phone_verified")) {
        return Promise.reject(error.response.data);
      }
    }
  }
  cache = [];
  return Promise.reject(error?.response?.data.message);
};

export const fetchUrl = (
  type,
  url,
  data,
  { authToken = true, fetchBaseResponse = false, contentType }
) => {
  setHeaders(contentType, authToken);
  if (data && !data.shouldRefetch) {
    if (type.toUpperCase() === "GET") {
      if (cache.indexOf(url) !== -1) {
        const controller = cancel.filter((i) => i.url === url);
        controller.map((item) => item.c());
      } else {
        cache.push(url);
      }
    }
  }
  data && data.shouldRefetch && delete data.shouldRefetch;
  const handler = ACTION_HANDLERS[type.toUpperCase()];
  return !fetchBaseResponse
    ? handler(url, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => showErrorAsToast(error, { type, url }))
    : handler(url, data).catch((error) =>
        showErrorAsToast(error, { type, url })
      );
};
