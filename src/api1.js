import axios from 'axios'

const http = axios.create({
    baseURL: "https://1810-34-125-187-222.ngrok-free.app",
})

export default http;