import instance from '.'

const userAPI = {
  login: (email: string, password: string) => {
    return instance.post('auth/login', {
      email,
      password,
    })
  },
  register: (email: string, password: string) => {
    return instance.post('auth/register', {
      email,
      password,
    })
  },
  refresh: () => {
    return instance.post(
      'auth/refresh',
      {},
      {
        headers: {
          Authorization: localStorage.getItem('refreshToken'),
        },
      }
    )
  },
}

export default userAPI
