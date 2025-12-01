import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/profile'),
  generateMasterToken: (appName) => api.post('/auth/master-token', { appName }),
  verifyMasterToken: (token) => api.post('/auth/verify-token', { token }),
  revokeMasterToken: (token) => api.post('/auth/revoke-token', { token })
};

// Products API
export const productsAPI = {
  getAll: () => api.get('/products'),
  getOne: (uuid) => api.get(`/products/${uuid}`),
  create: (data) => api.post('/products', data),
  update: (uuid, data) => api.put(`/products/${uuid}`, data),
  delete: (uuid) => api.delete(`/products/${uuid}`)
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getMessages: () => api.get('/contact'),
  markAsRead: (id) => api.put(`/contact/${id}/read`)
};

export default api;
