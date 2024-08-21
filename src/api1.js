import axios from 'axios'

const http = axios.create({
    baseURL: "https://f52e-34-16-219-242.ngrok-free.app",
})

export default http;