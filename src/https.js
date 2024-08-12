import axios from 'axios'

const http = axios.create({
    baseURL: "https://b312-34-125-66-170.ngrok-free.app",
})

export default http;