import axios from 'axios';

// Replace the URL below with your actual deployed backend URL (Render/Vercel)
const API_URL = 'https://your-backend-api-link.vercel.app/api'; 

const api = axios.create({
    baseURL: API_URL,
});

// This interceptor automatically attaches the access_token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;