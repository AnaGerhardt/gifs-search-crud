import axios from "axios";
import { loading, loaded } from "../redux/loading.slice";
import store from "../redux/store";
import { toast } from "react-toastify";

const DEBUG = process.env.NODE_ENV === "development";

const mainAxiosConfig = {
  baseURL: "https://api.giphy.com",
};

const instances = {
  main: axios.create(mainAxiosConfig),
};

function catcher(error) {
  if (
    error.response &&
    error.response.data &&
    error.response.data.errorMessage &&
    error.response.data.code
  ) {
    toast["error"](error.response.data.errorMessage);
  } else {
    toast["error"]("Ocorreu algum erro, aguarde e tente novamente!");
  }
  return error;
}

async function requestInterceptor(config) {
  if (DEBUG) {
    console.info("⬆ requesting", config);
  }
  return config;
}

async function requestError(error) {
  if (DEBUG) {
    console.error("❗ request error", error);
  }

  return Promise.reject(error);
}

async function responseInterceptor(response) {
  if (DEBUG) {
    console.info("⬇ response", response);
  }

  return response;
}

async function responseError(error) {
  if (DEBUG) {
    console.info("❗ response error", error);
  }
  return Promise.reject(error);
}

instances.main.interceptors.request.use(requestInterceptor, requestError);
instances.main.interceptors.response.use(responseInterceptor, responseError);

async function request(method, url, params) {
  const axiosInstance = instances["main"];
  store.dispatch(loading(url));
  try {
    const response = await axiosInstance(url, {
      method,
      params,
    });
    return response;
  } catch (e) {
    catcher(e);
  } finally {
    store.dispatch(loaded(url));
  }
}

const methods = {
  get: async (url, obj) => request("GET", url, { ...obj }),
};

export default methods;
