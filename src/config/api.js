import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BASE_URL = 'https://stapubox.com'; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Token': 'trial_77998137_839ee58d95d0e8f1b2764a66f46638ae',
  },
});


api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('jwt_token');
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization;
      }
    } catch (e) {
      console.error("Error reading token from storage", e);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;