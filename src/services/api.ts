import axios from 'axios'
import cookie from './CookieService';

const defaultOptions = {
    baseURL: window.location.protocol + "//" + window.location.hostname + ":8000",  
    //baseURL: `http://books-exchange-dev.spring-intensive-2021.simbirsoft1.com:8000/`, //FOR DEV
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
