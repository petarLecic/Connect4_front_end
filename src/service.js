import axios from 'axios'

const BASE_URL = 'https://conn4.herokuapp.com/'
const LOGIN = 'login/'
const REGISTER = 'register/'
const USERS = 'users/'

export const login = (user) => axios.post(`${BASE_URL}${LOGIN}`, user)

export const postUser = (user) => axios.post(`${BASE_URL}${REGISTER}`, user)

export const deleteAcc = (user) => axios.delete(`${BASE_URL}${USERS}`, {data: {...user}})