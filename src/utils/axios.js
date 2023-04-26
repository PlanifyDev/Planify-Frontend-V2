import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------


const axiosInstance = axios.create({
  baseURL: "http://20.185.71.1/api/",
  // timeout: 1000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 500) {
      console.error('An error occurred:', error);
      const customError = new Error('Internal Server Error');
      customError.response = error.response;
      window.location.href = '/500';
      return Promise.reject(customError);
    }
    return Promise.reject((error.response && error.response.data) || new Error('Something went wrong'));
  }
);

export default axiosInstance;
