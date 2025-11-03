import axios from 'axios';

export const customFetch = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID i2QzMU632_zktCP4qk4JHl2GxRvhXz5rRhZ1wiBDnhM",
    "Accept-Version": "v1"
  }
});