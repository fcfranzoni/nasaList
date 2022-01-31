import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_NASA_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
   },
});

export default api;
