import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mce-mind-web-savio591.vercel.app/api',
});
