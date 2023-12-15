import axios from 'axios';
import config from './config';

const apiService = axios.create({
  baseURL: config.baseURL,
});

export default apiService;