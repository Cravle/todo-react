import { UserAction, UserActionTypes, UserState } from '../../types/user'
import { getItem } from '../../utils'

const initialState: UserState = {
	user: getItem('user') || {
		email: '',
		password: '',
	},
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case UserActionTypes.SET_USER: {
			return { ...state, user: action.user }
		}
		default:
			return state
	}
}
