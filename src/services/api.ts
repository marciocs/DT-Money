import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://contas-a-pagar.vercel.app/api',
})
