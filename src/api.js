import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/query/Login', // Replace with your API base URL
  timeout: 5000, // Set timeout (optional)
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('token')}` // Example authorization header
//   }
});

export default api;