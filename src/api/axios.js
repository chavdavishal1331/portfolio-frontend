import axios from "axios";

export const API_BASE =
  process.env.REACT_APP_API_BASE || "https://portfolio-backend-ro4m.onrender.com";

const api = axios.create({
  baseURL: `${API_BASE}/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;