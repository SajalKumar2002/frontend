import axios from 'axios'

// login form, llmmodel, navbar,
export const http = axios.create({
  baseURL: "http://15.206.74.44:5000/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
})

// CSV, SQL - Structured (Connect, Chat)
export const api1 = axios.create({
  baseURL: "https://801c-34-125-183-167.ngrok-free.app"
})

// CSV, SQL - Structured (Connect, Chat)
export const api2 = axios.create({
  baseURL: "https://3cce-34-80-18-67.ngrok-free.app"
})

// PDF - Unstructured (Connect, Chat)
export const api3 = axios.create({
  baseURL: ""
})
