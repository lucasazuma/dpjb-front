import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your API base URL
  timeout: 1000, // Set timeout (optional)
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('token')}` // Example authorization header
//   }
});

export default api;