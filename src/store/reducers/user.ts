import { UserAction, UserActionTypes, UserState } from '@type//user'

const initialState: UserState = {
  isAuth: !!localStorage.getItem('token'),
  error: '',
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_ERROR: {
      return { ...state, error: action.payload.error }
    }

    case UserActionTypes.SET_IS_AUTH: {
      return { ...state, isAuth: action.payload.isAuth }
    }
    default:
      return state
  }
}

export default userReducer
