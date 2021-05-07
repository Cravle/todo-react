import { User } from '.'

type UserState = {
  user: User
}

enum UserActionTypes {
  SET_USER = 'TODO/USER/SET_USER',
}

type AddUser = {
  type: UserActionTypes.SET_USER
  user: User
}

type UserAction = AddUser

export type { UserState, AddUser, UserAction }
export { UserActionTypes }
