import axios from "axios";

const AxiosInstance = axios.create()

export default AxiosInstance;

AxiosInstance.interceptors.response.use(response => {
    return response.data
}, error => {
    return error
})

/* 
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
*/