import axios from 'axios'

// login form, llmmodel, navbar,
export const http = axios.create({
  baseURL: "http://15.206.74.44:5000/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
})

// CSV, SQL - Structured (Connect, Chat)
export const api1 = axios.create({
  baseURL: "https://3794-34-126-128-73.ngrok-free.app "
})

// CSV, SQL - Structured (Connect, Chat)
export const api2 = axios.create({
  baseURL: "https://a69c-35-247-79-139.ngrok-free.app "
})

// PDF - Unstructured (Connect, Chat)
export const api3 = axios.create({
  baseURL: ""
})
