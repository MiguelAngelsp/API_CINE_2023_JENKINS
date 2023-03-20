import axios from 'axios';

const cineApi = axios.create({
    baseURL: 'http://149.102.139.206:80/api'
});

export default cineApi