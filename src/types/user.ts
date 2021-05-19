import { User } from '.'

type UserState = {
  isAuth: boolean
  error: string
}

enum UserActionTypes {
  SET_ERROR = 'TODO/USER/SET_ERROR',
  SET_IS_AUTH = 'TODO/USER/SET_IS_AUTH',
  LOGIN_REQUEST = 'TODO/USER/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'TODO/USER/LOGIN_SUCCESS',
  LOGIN_FAILED = 'TODO/USER/LOGIN_FAILED',
  REGISTER_REQUEST = 'TODO/USER/REGISTER_REQUEST',
  REGISTER_SUCCESS = 'TODO/USER/REGISTER_SUCCESS',
  REGISTER_FAILED = 'TODO/USER/REGISTER_FAILED',
  REFRESH_REQUEST = 'TODO/USER/REFRESH_REQUEST',
  REFRESH_SUCCESS = 'TODO/USER/REGISTER_SUCCESS',
  REFRESH_FAILED = 'TODO/USER/REGISTER_FAILED',
}

type SetError = {
  type: UserActionTypes.SET_ERROR
  payload: {
    error: string
  }
}

type SetIsAuth = {
  type: UserActionTypes.SET_IS_AUTH
  payload: {
    isAuth: boolean
  }
}

type LoginRequest = {
  type: UserActionTypes.LOGIN_REQUEST
  payload: {
    user: User
    history: any
  }
}

type LoginSuccess = {
  type: UserActionTypes.LOGIN_SUCCESS
}

type LoginFailed = {
  type: UserActionTypes.LOGIN_FAILED
}

type RegisterRequest = {
  type: UserActionTypes.REGISTER_REQUEST
  payload: {
    user: User
  }
}

type RegisterSuccess = {
  type: UserActionTypes.REGISTER_SUCCESS
}

type RegisterFailed = {
  type: UserActionTypes.REGISTER_FAILED
}

type RefreshRequest = {
  type: UserActionTypes.REFRESH_REQUEST
}
type RefreshSuccess = {
  type: UserActionTypes.REFRESH_SUCCESS
}
type RefreshFailed = {
  type: UserActionTypes.REFRESH_FAILED
}

type UserAction =
  | SetError
  | SetIsAuth
  | LoginRequest
  | LoginSuccess
  | LoginFailed
  | RegisterRequest
  | RegisterSuccess
  | RegisterFailed
  | RefreshRequest
  | RefreshSuccess
  | RefreshFailed

export type {
  UserState,
  SetIsAuth,
  SetError,
  UserAction,
  LoginRequest,
  LoginSuccess,
  LoginFailed,
  RegisterRequest,
  RegisterSuccess,
  RegisterFailed,
  RefreshRequest,
  RefreshSuccess,
  RefreshFailed,
}
export { UserActionTypes }
