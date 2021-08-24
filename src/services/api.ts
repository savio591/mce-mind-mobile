import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mce-mind-web-7d83z4lrz-savio591.vercel.app/api',
});
