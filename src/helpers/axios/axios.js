import axios from "axios";

const API = axios.create({
  baseURL: "https://dizkaapi.herokuapp.com",
});

API.interceptors.response.use(function (response) {
  return response.data;
});

export default API;
