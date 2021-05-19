import { User } from '@type//index'
import type { UserAction } from '@type//user'
import { UserActionTypes } from '@type//user'

export const setError = (error: string): UserAction => {
  return {
    type: UserActionTypes.SET_ERROR,
    payload: {
      error,
    },
  }
}

export const loginRequest = (user: User, history: any): UserAction => {
  return {
    type: UserActionTypes.LOGIN_REQUEST,
    payload: {
      user,
      history,
    },
  }
}

export const loginSuccess = (): UserAction => {
  return {
    type: UserActionTypes.LOGIN_SUCCESS,
  }
}

export const loginFailed = (): UserAction => {
  return {
    type: UserActionTypes.LOGIN_FAILED,
  }
}

export const registerRequest = (user: User): UserAction => {
  return {
    type: UserActionTypes.REGISTER_REQUEST,
    payload: {
      user,
    },
  }
}

export const registerSuccess = (): UserAction => {
  return {
    type: UserActionTypes.REGISTER_SUCCESS,
  }
}

export const registerFailed = (): UserAction => {
  return {
    type: UserActionTypes.REGISTER_FAILED,
  }
}

export const setIsAuth = (isAuth: boolean): UserAction => {
  return {
    type: UserActionTypes.SET_IS_AUTH,
    payload: {
      isAuth,
    },
  }
}

export const refreshTokenRequest = (): UserAction => {
  return {
    type: UserActionTypes.REFRESH_REQUEST,
  }
}

export const refreshTokenSuccess = (): UserAction => {
  return {
    type: UserActionTypes.REFRESH_SUCCESS,
  }
}

export const refreshTokenFailed = (): UserAction => {
  return {
    type: UserActionTypes.REFRESH_FAILED,
  }
}
