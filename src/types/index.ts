export enum TaskStatus {
	ACTIVE = 'active',
	COMPLETED = 'completed',
}

export type Sort = TaskStatus | 'all'

export type Task = {
	text: string
	status: TaskStatus
	id: string
	isEdit: boolean
}

export type CountTaskByStatus = {
	activeTask: number
	completedTask: number
}

export type User = {
	email: string
	password: string
}
