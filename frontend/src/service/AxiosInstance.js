import axios from "axios";

const AxiosInstance = axios.create();
AxiosInstance.defaults.baseURL = "http://localhost:5000/api"

export default AxiosInstance;

AxiosInstance.interceptors.response.use(response => {
  // console.log('RESPONSE___________________', JSON.stringify(response, null, 4))
  return response.data
}, error => {
  // console.log("err____________________________________________", JSON.stringify(error?.response?.data, null, 2))
  return Promise.reject(String(error?.response?.data))
})

