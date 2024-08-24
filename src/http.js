import axios from 'axios'

// login form, llmmodel, navbar,
export const http = axios.create({
  baseURL: "http://15.206.74.44:5000/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
})

// CSV, SQL - Structured (Connect, Chat)
export const api1 = axios.create({
  baseURL: "https://a235-34-124-238-112.ngrok-free.app"
})

// CSV, SQL - Structured (Connect, Chat)
export const api2 = axios.create({
  baseURL: "https://dfb2-34-74-243-200.ngrok-free.app"
})

// PDF - Unstructured (Connect, Chat)
export const api3 = axios.create({
  baseURL: "https://bb42-34-125-168-201.ngrok-free.app"
})
