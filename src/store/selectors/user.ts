import { UserState } from '@type//user'
import { RootState } from '..'

export const getError = (state: RootState): string => state.user.error

export const getIsAuth = (state: RootState): boolean => state.user.isAuth
