import axios from 'axios'

const http = axios.create({
    baseURL: "https://1b56-34-23-71-44.ngrok-free.app",
})

export default http;