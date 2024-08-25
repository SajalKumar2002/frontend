import axios from 'axios'

// login form, llmmodel, navbar,
export const http = axios.create({
  baseURL: "http://51.20.85.44:5000/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
})

// CSV, SQL - Structured (Connect, Chat)
export const api1 = axios.create({
  baseURL: "https://b0ba-35-227-166-156.ngrok-free.app"
})

// CSV, SQL - Structured (Connect, Chat)
export const api2 = axios.create({
  baseURL: "https://deab-34-106-215-212.ngrok-free.app"
})

// PDF - Unstructured (Connect, Chat)
export const api3 = axios.create({
  baseURL: ""
})
