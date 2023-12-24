import axios from "axios";

export const api = (token) =>
  axios.create({
    baseURL: "http://localhost:3000", 
    headers: {
      token: `Bearer__${token}`,
      "Content-Type": "multipart/form-data",
    },
  });