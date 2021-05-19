import Axios from '.'

const tasksAPI = {
  getTasks: (status: string) => {
    return status !== 'all'
      ? Axios.get(`tasks?status=${status}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }).then((res) => res.data)
      : Axios.get(`tasks`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }).then((res) => res.data)
  },
  updateTask: (id: string, text: string, status: string) => {
    return Axios.put(
      'task/update',
      {
        id,
        text,
        status,
      },
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    )
  },
  addTask: (text: string, status: string) => {
    return Axios.post(
      'create-task',
      {
        text,
        status,
      },
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    )
  },
  deleteTask: (id: string) => {
    return Axios.delete(`task/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
  },
  deleteCompleted: (ids: string) => {
    return Axios.delete(`tasks/${ids}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
  },
  changeAllStatus: (ids: string[], status: string) => {
    return Axios.put(
      `task/change-status`,
      { ids, status },
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    )
  },
}

export default tasksAPI
