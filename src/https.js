import axios from 'axios'

const http = axios.create({
    baseURL: "https://cef4-34-82-181-145.ngrok-free.app",
})

export default http;