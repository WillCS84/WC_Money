import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3000/api"
})

export const back = axios.create({
  baseURL: "http://localhost:8081"
})
