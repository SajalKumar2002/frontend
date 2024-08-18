import axios from 'axios'

const http = axios.create({
  baseURL: "15.206.74.44:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  withCredentials: true,
})

export default http;