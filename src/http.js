import axios from 'axios'

const http = axios.create({
  baseURL: "15.206.74.44:5000",
  withCredentials: true,
})

export default http;