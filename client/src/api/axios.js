import axios from "axios";
import { de } from "zod/v4/locales";

const instance = axios.create({
    baseURL: 'http://localhost:5001/api',
    withCredentials: true
})

export default instance