import qs from "qs";

export const config = {
  authToken: true,
  fetchBaseResponse: false,
  contentType: "",
};

export const configData = {
  ...config,
  authToken: false,
};

export const getQueryData = (string) => {
  const data = string.substring(1);
  return qs.parse(data);
};
