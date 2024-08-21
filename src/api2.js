import axios from 'axios'

const http = axios.create({
    baseURL: "https://afa1-35-227-141-24.ngrok-free.app",
})

export default http;