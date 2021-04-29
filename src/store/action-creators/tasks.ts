import { Sort, Task, TaskStatus } from '../../types'
import { TasksAction, TasksActionTypes } from '../../types/tasks'

export const addTask = (text: string): TasksAction => {
	return { type: TasksActionTypes.ADD_TASK, text }
}

export const changeStatus = (id: string): TasksAction => {
	return { type: TasksActionTypes.CHANGE_STATUS, id }
}

export const changeAllStatus = (status: TaskStatus): TasksAction => {
	return { type: TasksActionTypes.CHANGE_ALL_STATUS, status }
}

export const clearCompleted = (): TasksAction => {
	return { type: TasksActionTypes.CLEAR_COMPLETED }
}

export const selectFilter = (filter: Sort): TasksAction => {
	return { type: TasksActionTypes.SET_FILTER, filter }
}

export const deleteTask = (id: string): TasksAction => {
	return { type: TasksActionTypes.DELETE_TASK, id }
}

export const setEdit = (id: string): TasksAction => {
	return { type: TasksActionTypes.SET_EDIT, id }
}

export const setNewText = (id: string, text: string): TasksAction => {
	return { type: TasksActionTypes.UPDATE_TASK_TEXT, payload: { id, text } }
}

export const setTaskList = (newTaskList: Task[]): TasksAction => {
	return { type: TasksActionTypes.SET_TASK_LIST, newTaskList }
}
