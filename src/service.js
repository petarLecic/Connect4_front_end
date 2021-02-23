import axios from 'axios'

const BASE_URL = 'http://localhost:3001/'
const LOGIN = 'login/'
const REGISTER = 'register/'

export const login = (user) => axios.post(`${BASE_URL}${LOGIN}`, user)

export const postUser = (user) => axios.post(`${BASE_URL}${REGISTER}`, user)