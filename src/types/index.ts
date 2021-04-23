export enum Status {
	ACTIVE = 'active',
	COMPLETED = 'completed',
}

export enum Sort {
	all,
	active,
	completed,
}

export type Task = {
	text: string
	status: Status
	id: string
	isEdit: boolean
}

export type CountTaskByStatus = {
	activeTask: number
	completedTask: number
}
