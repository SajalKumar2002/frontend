import axios from 'axios'

const http = axios.create({
    baseURL: "https://f627-34-125-64-230.ngrok-free.app",
})

export default http;