import axios from 'axios'

const http = axios.create({
    baseURL: "https://e70c-34-125-62-5.ngrok-free.app",
})

export default http;