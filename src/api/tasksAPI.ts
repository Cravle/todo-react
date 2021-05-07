import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
})

const tasksAPI = {
  getTasks: (status: string) => {
    return status !== 'all'
      ? instance.get(`tasks?status=${status}`).then((res) => res.data)
      : instance.get(`tasks`).then((res) => res.data)
  },
  updateTask: (id: string, text: string, status: string) => {
    return instance.put('task/update', {
      id,
      text,
      status,
    })
  },
  addTask: (text: string, status: string) => {
    return instance.post('create-task', {
      text,
      status,
    })
  },
  deleteTask: (id: string) => {
    return instance.delete(`task/${id}`)
  },
  deleteCompleted: (ids: string) => {
    return instance.delete(`tasks/${ids}`)
  },
  changeAllStatus: (ids: string[], status: string) => {
    return instance.put(`task/change-status`, { ids, status })
  },
}

export default tasksAPI
