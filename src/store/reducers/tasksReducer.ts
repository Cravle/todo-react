import { v4 as uuidv4 } from 'uuid'

import { TaskStatus } from '../../types'
import { TasksAction, TasksActionTypes, TasksState } from '../../types/tasks'
import { getItem } from '../../utils'

const initialState: TasksState = {
	taskList: getItem('taskList') || [],
	filterType: getItem('filterType') || 'all',
}

export const tasksReducer = (state = initialState, action: TasksAction): TasksState => {
	switch (action.type) {
		case TasksActionTypes.ADD_TASK: {
			const taskText = action.text.trim()
			if (!taskText.length) {
				return state
			} // component

			return {
				...state,
				taskList: [
					...state.taskList,
					{
						id: uuidv4(),
						isEdit: false,
						status: TaskStatus.ACTIVE,
						text: taskText,
					},
				],
			}
		}
		case TasksActionTypes.CHANGE_STATUS: {
			const newTaskList = state.taskList.map(task =>
				task.id === action.id
					? {
							...task,
							status:
								task.status === TaskStatus.COMPLETED
									? TaskStatus.ACTIVE
									: TaskStatus.COMPLETED,
					  }
					: task
			)
			return { ...state, taskList: newTaskList }
		}
		case TasksActionTypes.CHANGE_ALL_STATUS: {
			const newTaskList = state.taskList.map(task => ({
				...task,
				status: !action.isAllTasksCompleted ? TaskStatus.COMPLETED : TaskStatus.ACTIVE, // component
			}))
			return { ...state, taskList: newTaskList }
		}
		case TasksActionTypes.CLEAR_COMPLETED: {
			const newTaskList = state.taskList.filter(task => task.status === TaskStatus.ACTIVE)
			return { ...state, taskList: newTaskList }
		}
		case TasksActionTypes.SELECT_FILTER: // set filter
			return { ...state, filterType: action.filter }
		case TasksActionTypes.DELETE_TASK: {
			const newTaskList = state.taskList.filter(task => task.id !== action.id) // [ids...]
			return { ...state, taskList: newTaskList }
		}
		case TasksActionTypes.SET_EDIT: {
			const newTaskList = state.taskList.map(task =>
				task.id === action.id ? { ...task, isEdit: true } : task
			)
			return { ...state, taskList: newTaskList }
		}
		case TasksActionTypes.SET_NEW_TEXT: {
			// rename: update task text
			const text = action.payload.text.trim() // coponent

			const newTaskList = text.length
				? state.taskList.map(task =>
						task.id === action.payload.id ? { ...task, text, isEdit: false } : task
				  )
				: state.taskList.filter(task => task.id !== action.payload.id)

			return { ...state, taskList: newTaskList }
		}
		case TasksActionTypes.SET_TASK_LIST: {
			return { ...state, taskList: action.newTaskList }
		}
		default:
			return state
	}
}
