import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "@/utils/local-storage";
import axios, { AxiosError } from "axios";
import { refreshToken } from "../auth/api-services";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let refreshTokenPromise: Promise<any> | null = null;

const errorHandler = async (error: AxiosError) => {
  const responseMeta: TMeta = error.response?.data as TMeta;
  if (!error?.response) {
    return Promise.reject({
      meta: {
        statusCode: 503,
        message: "Network not available!",
        error: "Network not available!",
      },
      result: {
        data: null,
      },
    });
  }

  if (error.response?.status === 401 && error?.config) {
    const originalRequest = error?.config;

    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshToken()
        .then((res: any) => {
          const accessToken = `${res?.tokenType} ${res?.accessToken}`;
          setStorageItem("accessToken", accessToken);
          request.defaults.headers.Authorization = accessToken;
        })
        .catch((err: any) => {
          removeStorageItem("accessToken");
          location.href = "/";
          return Promise.reject(err);
        })
        .finally(() => {
          refreshTokenPromise = null;
        });

      return refreshTokenPromise?.then(() => {
        return request(originalRequest);
      });
    }
  }

  return Promise.reject(responseMeta);
};

request.interceptors.request.use(
  (config) => {
    const token = getStorageItem("accessToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return errorHandler(error);
  }
);

export default request;
