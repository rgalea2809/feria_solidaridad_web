import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://feria-solidaridad-server.vercel.app',
});

export default axiosInstance;