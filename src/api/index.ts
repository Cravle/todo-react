import axios from 'axios'

import tasksAPI from './tasksAPI'
import userAPI from './userAPI'

const Axios = axios.create({
  baseURL: 'http://localhost:8000/',
})

export { tasksAPI, userAPI }

export default Axios
