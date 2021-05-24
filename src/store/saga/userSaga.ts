import { AxiosResponse } from 'axios'
import { put, takeEvery, call, all } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { userAPI } from '@api//'
import { UserActionTypes, LoginRequest, RegisterRequest } from '@type//user'

import {
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
  setError,
  setIsAuth,
} from '../actions/user'
import { clearLS } from '../../utils'

function* loginWorker(action: LoginRequest) {
  try {
    const res: AxiosResponse = yield call(
      userAPI.login,
      action.payload.user.email,
      action.payload.user.password
    )
    yield put(loginSuccess())
    const token = String(res.data.token)
    const refreshToken = String(res.data.refreshToken)
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)
    yield put(setIsAuth(true))
    yield put(push('/tasks'))
  } catch (e) {
    const errorMessage = e?.response?.data?.message
    yield put(loginFailed())
    yield put(setError(errorMessage))
  }
}

function* registerWorker(action: RegisterRequest) {
  try {
    const res: AxiosResponse = yield call(
      userAPI.register,
      action.payload.user.email,
      action.payload.user.password
    )

    if (res.status === 201) {
      yield put(registerSuccess())
      yield put(push('/login'))
    }
  } catch (e) {
    const errorMessage = e?.response?.data?.message
    yield put(registerFailed())
    yield put(setError(errorMessage))
  }
}

function* refreshWorker() {
  try {
    const res: AxiosResponse = yield call(userAPI.refresh)
    if (res.status === 201) {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('refreshToken', res.data.refreshToken)
    }
  } catch (e) {
    yield put(setIsAuth(false))
    clearLS()
    yield put(push('/login'))
  }
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.LOGIN_REQUEST, loginWorker)
  yield takeEvery(UserActionTypes.REGISTER_REQUEST, registerWorker)
  yield takeEvery(UserActionTypes.REFRESH_REQUEST, refreshWorker)
}
