import axios from 'axios'

const http = axios.create({
  // baseURL: "http://15.206.74.44:5000",
  baseURL: "http://localhost:5000",
  withCredentials: true,
})

export default http;
