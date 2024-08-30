import axios from "axios";

// login form, llmmodel, navbar,
export const http = axios.create({
  // baseURL: "http://15.206.74.44:5000/api",
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// CSV, SQL - Structured (Connect, Chat)
export const api1 = axios.create({
  baseURL: "https://2ab9-35-233-200-211.ngrok-free.app",
});

// CSV, SQL - Structured (Connect, Chat)
export const api2 = axios.create({
  baseURL: "https://d730-34-28-166-105.ngrok-free.app",
});

// PDF - Unstructured (Connect, Chat)
export const api3 = axios.create({
  baseURL: "https://10d6-35-202-163-71.ngrok-free.app",
});
