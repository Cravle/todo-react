import { Dispatch } from 'redux'

import { tasksAPI } from '../../api'
import { CountTasks, Task, TaskDb, TaskStatus } from '../../types'
import { TasksAction, TasksActionTypes } from '../../types/tasks'

export const getTasks = (status: string) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch(getTaskRequest())
      const res = await tasksAPI.getTasks(status)
      const taskList: Task[] = res.tasks.map((task: TaskDb) => ({
        text: task.text,
        status: task.status,
        id: task.id,
        isEdit: false,
      }))

      dispatch(getTaskSuccess(taskList, res.count))
    } catch (e) {
      dispatch(getTaskFailed())
      console.log(e)
    }
  }
}

export const updateTask = (id: string, text: string, status: TaskStatus) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch(updateTaskRequest())
      const res = await tasksAPI.updateTask(id, text, status)
      if (res.status === 200) {
        dispatch(updateTaskSuccess())
      }
    } catch (e) {
      dispatch(updateTaskFailed())
      console.log(e)
    }
  }
}

export const createTask = (text: string): any => async (
  dispatch: Dispatch<TasksAction>
) => {
  try {
    dispatch(createTaskRequest())
    await tasksAPI.addTask(text, TaskStatus.ACTIVE)
    dispatch(createTaskSuccess())
  } catch (e) {
    dispatch(createTaskFailed())
    console.log(e)
  }
}

export const removeTask = (id: string) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch(removeTaskRequest())

      const res = await tasksAPI.deleteTask(id)
      if (res.status === 200) {
        dispatch(removeTaskSuccess())
      }
    } catch (e) {
      dispatch(removeTaskFailed())
      console.log(e)
    }
  }
}
export const removeCompleted = (ids: string) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch(removeCompletedTaskRequest())
      const res = await tasksAPI.deleteCompleted(ids)

      if (res.status === 200) {
        dispatch(removeCompletedTaskSuccess())
      }
    } catch (e) {
      dispatch(removeCompletedTaskFailed())
      console.log(e)
    }
  }
}

export const changeAllStatus = (ids: string[], status: string) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    try {
      dispatch(changeAllStatusRequest())
      const res = await tasksAPI.changeAllStatus(ids, status)

      if (res.status === 200) {
        dispatch(changeAllStatusSuccess())
      }
    } catch (e) {
      dispatch(changeAllStatusFailed())
      console.log(e)
    }
  }
}

export const selectFilter = (filter: string): TasksAction => {
  return { type: TasksActionTypes.SET_FILTER, filter }
}

export const setEdit = (id: string): TasksAction => {
  return { type: TasksActionTypes.SET_EDIT, id }
}

export const getTaskRequest = (): TasksAction => {
  return { type: TasksActionTypes.GET_TASK_REQUEST }
}

export const getTaskSuccess = (
  newTaskList: Task[],
  count: CountTasks
): TasksAction => {
  return { type: TasksActionTypes.GET_TASK_SUCCESS, newTaskList, count }
}

export const getTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.GET_TASK_FAILED }
}

export const updateTaskRequest = (): TasksAction => {
  return { type: TasksActionTypes.UPDATE_TASK_REQUEST }
}

export const updateTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.UPDATE_TASK_SUCCESS }
}

export const updateTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.UPDATE_TASK_FAILED }
}

export const removeTaskRequest = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_REQUEST }
}

export const removeTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_SUCCESS }
}

export const removeTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_FAILED }
}

export const removeCompletedTaskRequest = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_COMPLETED_TASK_REQUEST }
}

export const removeCompletedTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_COMPLETED_TASK_SUCCESS }
}

export const removeCompletedTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_COMPLETED_TASK_FAILED }
}

export const createTaskRequest = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_REQUEST }
}

export const createTaskSuccess = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_SUCCESS }
}

export const createTaskFailed = (): TasksAction => {
  return { type: TasksActionTypes.REMOVE_TASK_FAILED }
}

export const changeAllStatusRequest = (): TasksAction => {
  return { type: TasksActionTypes.CHANGE_STATUS_TASK_REQUEST }
}

export const changeAllStatusSuccess = (): TasksAction => {
  return { type: TasksActionTypes.CHANGE_STATUS_TASK_SUCCESS }
}

export const changeAllStatusFailed = (): TasksAction => {
  return { type: TasksActionTypes.CHANGE_STATUS_TASK_FAILED }
}
