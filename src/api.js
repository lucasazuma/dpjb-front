import axios from 'axios';
import { useAuth } from './context/auth-context';

const api = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your API base URL
  timeout: 5000, // Set timeout (optional)
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('token')}` // Example authorization header
//   }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log(token)  
    console.log("hello token => ", token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;