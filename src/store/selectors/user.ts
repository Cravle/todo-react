import { User } from '../../types'
import { RootState } from '../reducers'

export const getUser = (state: RootState): User => state.user.user
