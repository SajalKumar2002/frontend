import axios from 'axios'

// login form, llmmodel, navbar,
export const http = axios.create({
  // baseURL: "http://15.206.74.44:5000",
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
})

// CSV, SQL - Structured (Connect, Chat)
export const api1 = axios.create({
  baseURL: "https://c5c1-35-230-72-55.ngrok-free.app"
})

// CSV, SQL - Structured (Connect, Chat)
export const api2 = axios.create({
  baseURL: "https://9c64-34-125-228-233.ngrok-free.app"
})

// PDF - Unstructured (Connect, Chat)
export const api3 = axios.create({
  baseURL: "https://bb42-34-125-168-201.ngrok-free.app"
})
