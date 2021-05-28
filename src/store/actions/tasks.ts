import { CountTasks, Task } from '@type//'
import { TasksAction, TasksActionTypes } from '@type//tasks'

export const selectFilter = (filter: string): TasksAction => {
  return { type: TasksActionTypes.SET_FILTER, filter }
}

export const getTaskRequest = (): TasksAction => {
  return {
    type: TasksActionTypes.GET_TASK_REQUEST,
  }
}

export const getTaskSuccess = (payload: {
  taskList: Task[]
  count: number
}): TasksAction => {
  return { type: TasksActionTypes.GET_TASK_SUCCESS, payload }
}

export const setPage = (payload: number): TasksAction => {
  return { type: TasksActionTypes.SET_PAGE, payload }
}

export const getTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.GET_TASK_FAILED }
}

export const updateTaskRequest = (
  id: string,
  text: string,
  status: string
): TasksAction => {
  return {
    type: TasksActionTypes.UPDATE_TASK_REQUEST,
    payload: {
      id,
      text,
      status,
    },
  }
}

export const updateTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.UPDATE_TASK_SUCCESS }
}

export const updateTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.UPDATE_TASK_FAILED }
}

export const removeTaskRequest = (id: string): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_REQUEST, payload: { id } }
}

export const removeTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_SUCCESS }
}

export const removeTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_FAILED }
}

export const removeCompletedTaskRequest = (ids: string): TasksAction => {
  return {
    type: TasksActionTypes.REMOVE_COMPLETED_TASK_REQUEST,
    payload: {
      ids,
    },
  }
}

export const removeCompletedTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_COMPLETED_TASK_SUCCESS }
}

export const removeCompletedTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_COMPLETED_TASK_FAILED }
}

export const createTaskRequest = (text: string): TasksAction => {
  return {
    type: TasksActionTypes.CREATE_TASK_REQUEST,
    payload: { text },
  }
}

export const createTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.CREATE_TASK_SUCCESS }
}

export const createTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_FAILED }
}

export const changeAllStatusRequest = (
  ids: string[],
  status: string
): TasksAction => {
  return {
    type: TasksActionTypes.CHANGE_STATUS_TASK_REQUEST,
    payload: {
      ids,
      status,
    },
  }
}

export const changeAllStatusSuccess = (): TasksAction => {
  return { type: TasksActionTypes.CHANGE_STATUS_TASK_SUCCESS }
}

export const changeAllStatusFailed = (): TasksAction => {
  return { type: TasksActionTypes.CHANGE_STATUS_TASK_FAILED }
}
