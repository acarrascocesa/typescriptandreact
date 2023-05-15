import axios from 'axios';

export const reqRes = axios.create({
    baseURL: "https://reqres.in/api"
})