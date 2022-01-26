import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhoast:3000/api'
})