import axios from 'axios'

const http = axios.create({
    baseURL: "https://71df-34-125-207-142.ngrok-free.app",
})

export default http;