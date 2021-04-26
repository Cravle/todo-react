export enum TaskStatus {
	ACTIVE,
	COMPLETED,
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
