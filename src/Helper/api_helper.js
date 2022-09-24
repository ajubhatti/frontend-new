import axios from "axios";
import { get, set } from "./cookie_helper.js";
import store from "../Redux/store";
import { setToken } from "../Redux/Actions/Auth/actions.js";

const API_URL = process.env.REACT_APP_FETCH_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

const requestMiddleware = (req) => {
  const token = get("token");
  if (!!token)
    req.headers.authorization = token.startsWith("Bearer ")
      ? token
      : "Bearer " + token;
  req.headers.AuthToken = token.startsWith("Bearer ") ? token : token;

  return req;
};

const responseMiddleware = (response) => {
  if (response?.data?.data?.token) {
    set("token", response.data.data.token);
    store.dispatch(setToken(response.data.data.token));
  }
  return response;
};

axiosApi.interceptors.request.use(requestMiddleware);

axiosApi.interceptors.response.use(responseMiddleware, (error) =>
  Promise.reject(error)
);

export { axiosApi };
