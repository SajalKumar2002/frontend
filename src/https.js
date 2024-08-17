import axios from 'axios'

const http = axios.create({
    baseURL: "https://264a-34-126-186-52.ngrok-free.app",
})

export default http;