import { Sort, Task } from '.'

export type TasksState = {
	taskList: Task[]
	filterType: Sort
}

export enum TasksActionTypes {
	ADD_TASK = 'TODO/TASKS/ADD_TASK',
	CHANGE_STATUS = 'TODO/TASKS/CHANGE_STATUS',
	CHANGE_ALL_STATUS = 'TODO/TASKS/CHANGE_ALL_STATUS',
	CLEAR_COMPLETED = 'TODO/TASKS/CLEAR_COMPLETED',
	SELECT_FILTER = 'TODO/TASKS/SELECT_FILTER',
	DELETE_TASK = 'TODO/TASKS/DELETE_TASK',
	SET_EDIT = 'TODO/TASKS/SET_EDIT',
	SET_NEW_TEXT = 'TODO/TASKS/SET_NEW_TEXT',
	SET_TASK_LIST = 'TODO/TASKS/SET_TASK_LIST',
}

export type AddTaskAction = {
	type: TasksActionTypes.ADD_TASK
	text: string
}

export type ChangeStatusAction = {
	type: TasksActionTypes.CHANGE_STATUS
	id: string
}

export type ChangeAllStatusAction = {
	type: TasksActionTypes.CHANGE_ALL_STATUS
	isAllTasksCompleted: boolean
}

export type ClearCompletedAction = {
	type: TasksActionTypes.CLEAR_COMPLETED
}

export type SelectFilterAction = {
	type: TasksActionTypes.SELECT_FILTER
	filter: Sort
}

export type DeleteTaskAction = {
	type: TasksActionTypes.DELETE_TASK
	id: string
}

export type SetEditAction = {
	type: TasksActionTypes.SET_EDIT
	id: string
}

export type SetNewTextAction = {
	type: TasksActionTypes.SET_NEW_TEXT
	payload: { id: string; text: string }
}

export type SetTaskList = {
	type: TasksActionTypes.SET_TASK_LIST
	newTaskList: Task[]
}

export type TasksAction =
	| AddTaskAction
	| ChangeStatusAction
	| ClearCompletedAction
	| SelectFilterAction
	| DeleteTaskAction
	| SetEditAction
	| SetNewTextAction
	| ChangeAllStatusAction
	| SetTaskList
