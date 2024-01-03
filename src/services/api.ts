import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

// http://localhost:3000//api/burguers
// instalar json server para simular a api

export const getBurguers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getIceCream = () => api.get<SnackData[]>('/ice-cream')
export const getDrinks = () => api.get<SnackData[]>('/drinks')

export default api
