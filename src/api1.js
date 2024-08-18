import axios from 'axios'

const http = axios.create({
    baseURL: "https://3a82-35-247-30-173.ngrok-free.app",
})

export default http;