import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: "http://20.185.71.1/api/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

// const accessToken = window.localStorage.getItem('accessToken');
// const uid = JSON.parse(window.localStorage.getItem('user')).id
// axiosInstance.defaults.headers.common = {
//   'authorization': `${accessToken}`
// };

export default axiosInstance;
