import axios from 'axios'

const http = axios.create({
    baseURL: "https://4d02-34-125-234-85.ngrok-free.app",
})

export default http;