import axios from "axios";

export const API_URL = "https://gateway.scan-interfax.ru";

const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
});

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";

    return config;
});

export default api;