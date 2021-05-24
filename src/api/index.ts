import axios from 'axios'

import tasksAPI from './tasksAPI'
import userAPI from './userAPI'

export const apiPath = 'http://localhost:8000/'

const Axios = axios.create({
  baseURL: apiPath,
})

// Axios.interceptors.request.use(
//   async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
//     console.log(config, 'config')
//     const token = localStorage.getItem('token')
//     const refreshToken = localStorage.getItem('refreshToken')
//     config.headers = {
//       Authorization: config.url === 'refresh' ? refreshToken : token,
//     }
//     return config
//   },
//   (error) => Promise.reject(error)
// )

// Axios.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response
//   },
//   async function (error) {
//     const originalRequest = error.config
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true
//       const res = await userAPI.refresh()
//       localStorage.setItem('token', res.data.token)
//       localStorage.setItem('refreshToken', res.data.refreshToken)
//       axios.defaults.headers.Authorization = res.data.token
//       return Axios(originalRequest)
//     }
//     return Promise.reject(error)
//   }
// )

export { tasksAPI, userAPI }

export default Axios
