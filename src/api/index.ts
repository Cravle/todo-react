import axios from 'axios'

import tasksAPI from './tasksAPI'
import userAPI from './userAPI'

export const apiPath = 'http://localhost:8000/'

const Axios = axios.create({
  baseURL: apiPath,
})

export { tasksAPI, userAPI }

export default Axios
