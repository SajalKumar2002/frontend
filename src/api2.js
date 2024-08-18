import axios from 'axios'

const http = axios.create({
    baseURL: "https://e326-34-139-183-149.ngrok-free.app",
})

export default http;