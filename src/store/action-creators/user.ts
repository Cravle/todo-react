import { User } from '../../types'
import { UserAction, UserActionTypes } from '../../types/user'

export const setUser = (user: User): UserAction => {
	return { type: UserActionTypes.SET_USER, user }
}
