import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.208.1:3000",
  timeout: 60 * 1000,
});
