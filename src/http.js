import axios from 'axios'

const http = axios.create({
  baseURL: "http://15.206.74.44:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': 'http://15.206.74.44:5000',
  }, withCredentials: true,
})

export default http;