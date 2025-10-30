// C:\sparsha-site\frontend\src\lib\api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
