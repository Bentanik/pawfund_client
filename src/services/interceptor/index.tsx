import { getStorageItem } from "@/utils/local-storage";
import axios, { AxiosError } from "axios";

const request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER, // Thay URL API của bạn
    timeout: 10000, // Thời gian chờ tối đa cho mỗi yêu cầu (ms)
    headers: {
        "Content-Type": "application/json",
    },
});

const errorHandler = async (error: AxiosError) => {
    const responseMeta: TMeta = error.response?.data as TMeta;
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
