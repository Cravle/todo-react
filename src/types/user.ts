import { User } from '.'

export type UserState = {
	user: User
}

export enum UserActionTypes {
	SET_USER = 'TODO/USER/SET_USER',
}

export type AddUser = {
	type: UserActionTypes.SET_USER
	user: User
}

export type UserAction = AddUser
