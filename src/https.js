import axios from 'axios'

const http = axios.create({
    baseURL: "https://e9a6-35-194-244-66.ngrok-free.app",
})

export default http;