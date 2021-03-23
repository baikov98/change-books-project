import axios from 'axios'
import cookie from './CookieService';

const base = process.env.NODE_ENV === "development" ? `http://books-exchange-dev.spring-intensive-2021.simbirsoft1.com:8000/` : `http://books-exchange-test.spring-intensive-2021.simbirsoft1.com:80/`

const defaultOptions = {
    baseURL: base,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };

export const api = axios.create(defaultOptions)

api.interceptors.request.use(function (config) {
    const token = cookie.get('token');
    config.headers.Authorization =  token ? `Bearer ${token?.access}` : '';
    return config;
});


export default api
