import axios from 'axios'

const http = axios.create({
    baseURL: "https://0649-34-125-127-162.ngrok-free.app",
})

export default http;