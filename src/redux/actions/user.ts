import { User } from '../../types'
import type { UserAction } from '../../types/user'
import { UserActionTypes } from '../../types/user'

export const setUser = (user: User): UserAction => {
  return { type: UserActionTypes.SET_USER, user }
}
