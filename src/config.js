import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
