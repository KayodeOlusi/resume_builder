import axios from "axios";

const instance = axios.create({
  baseURL: "https://resume-builder-ng.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
