import axios from 'axios'

const http = axios.create({
    baseURL: "https://0d3a-35-231-222-233.ngrok-free.app",
})

export default http;