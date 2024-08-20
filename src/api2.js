import axios from 'axios'

const http = axios.create({
    baseURL: "https://8045-34-139-243-28.ngrok-free.app",
})

export default http;