import axios from 'axios';

export const customFetch = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
    "Accept-Version": "v1"
  }
});