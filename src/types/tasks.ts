import { CountTasks, Task } from '.'

export type TasksState = {
  taskList: Task[]
  filterType: string
  count: { active: number; completed: number }
}

export enum TasksActionTypes {
  SET_FILTER = 'TODO/TASKS/SET_FILTER',
  SET_EDIT = 'TODO/TASKS/SET_EDIT',

  GET_TASK_REQUEST = 'TODO/TASKS/GET_TASK_REQUEST',
  GET_TASK_SUCCESS = 'TODO/TASKS/GET_TASK_SUCCESS',
  GET_TASK_FAILED = 'TODO/TASKS/GET_TASK_FAILED',

  REMOVE_TASK_REQUEST = 'TODO/TASKS/REMOVE_TASK_REQUEST',
  REMOVE_TASK_SUCCESS = 'TODO/TASKS/REMOVE_TASK_SUCCESS',
  REMOVE_TASK_FAILED = 'TODO/TASKS/REMOVE_TASK_FAILED',

  REMOVE_COMPLETED_TASK_REQUEST = 'TODO/TASKS/REMOVE_COMPLETED_TASK_REQUEST',
  REMOVE_COMPLETED_TASK_SUCCESS = 'TODO/TASKS/REMOVE_COMPLETED_TASK_SUCCESS',
  REMOVE_COMPLETED_TASK_FAILED = 'TODO/TASKS/REMOVE_COMPLETED_TASK_FAILED',

  CREATE_TASK_REQUEST = 'TODO/TASKS/CREATE_TASK_REQUEST',
  CREATE_TASK_SUCCESS = 'TODO/TASKS/CREATE_TASK_SUCCESS',
  CREATE_TASK_FAILED = 'TODO/TASKS/CREATE_TASK_FAILED',

  UPDATE_TASK_REQUEST = 'TODO/TASKS/UPDATE_TASK_REQUEST',
  UPDATE_TASK_SUCCESS = 'TODO/TASKS/UPDATE_TASK_SUCCESS',
  UPDATE_TASK_FAILED = 'TODO/TASKS/UPDATE_TASK_FAILED',

  CHANGE_STATUS_TASK_REQUEST = 'TODO/TASKS/CHANGE_STATUS_TASK_REQUEST',
  CHANGE_STATUS_TASK_SUCCESS = 'TODO/TASKS/CHANGE_STATUS_TASK_SUCCESS',
  CHANGE_STATUS_TASK_FAILED = 'TODO/TASKS/CHANGE_STATUS_TASK_FAILED',
}

export type SelectFilterAction = {
  type: TasksActionTypes.SET_FILTER
  filter: string
}

export type SetEditAction = {
  type: TasksActionTypes.SET_EDIT
  id: string
}

export type GetTaskRequest = {
  type: TasksActionTypes.GET_TASK_REQUEST
  payload: {
    status: string
  }
}

export type GetTaskSuccess = {
  type: TasksActionTypes.GET_TASK_SUCCESS
  newTaskList: Task[]
  count: CountTasks
}

export type GetTaskFailed = {
  type: TasksActionTypes.GET_TASK_FAILED
}

export type RemoveTaskRequest = {
  type: TasksActionTypes.REMOVE_TASK_REQUEST
  payload: {
    id: string
  }
}

export type RemoveTaskSuccess = {
  type: TasksActionTypes.REMOVE_TASK_SUCCESS
}

export type RemoveTaskFailed = {
  type: TasksActionTypes.REMOVE_TASK_FAILED
}

export type RemoveCompletedTaskRequest = {
  type: TasksActionTypes.REMOVE_COMPLETED_TASK_REQUEST
  payload: {
    ids: string
  }
}

export type RemoveCompletedTaskSuccess = {
  type: TasksActionTypes.REMOVE_COMPLETED_TASK_SUCCESS
}

export type RemoveCompletedTaskFailed = {
  type: TasksActionTypes.REMOVE_COMPLETED_TASK_FAILED
}

export type CreateTaskRequest = {
  type: TasksActionTypes.CREATE_TASK_REQUEST
  payload: {
    text: string
  }
}

export type CreateTaskSuccess = {
  type: TasksActionTypes.CREATE_TASK_SUCCESS
}

export type CreateTaskFailed = {
  type: TasksActionTypes.CREATE_TASK_FAILED
}

export type UpdateTaskRequest = {
  type: TasksActionTypes.UPDATE_TASK_REQUEST
  payload: {
    id: string
    text: string
    status: string
  }
}

export type UpdateTaskSuccess = {
  type: TasksActionTypes.UPDATE_TASK_SUCCESS
}

export type UpdateTaskFailed = {
  type: TasksActionTypes.UPDATE_TASK_FAILED
}

export type ChangeStatusTaskRequest = {
  type: TasksActionTypes.CHANGE_STATUS_TASK_REQUEST
  payload: {
    ids: string[]
    status: string
  }
}

export type ChangeStatusTaskSuccess = {
  type: TasksActionTypes.CHANGE_STATUS_TASK_SUCCESS
}

export type ChangeStatusTaskFailed = {
  type: TasksActionTypes.CHANGE_STATUS_TASK_FAILED
}

export type TasksAction =
  | SelectFilterAction
  | SetEditAction
  | GetTaskRequest
  | GetTaskSuccess
  | GetTaskFailed
  | RemoveTaskRequest
  | RemoveTaskSuccess
  | RemoveTaskFailed
  | RemoveCompletedTaskRequest
  | RemoveCompletedTaskSuccess
  | RemoveCompletedTaskFailed
  | CreateTaskRequest
  | CreateTaskSuccess
  | CreateTaskFailed
  | UpdateTaskRequest
  | UpdateTaskSuccess
  | UpdateTaskFailed
  | ChangeStatusTaskRequest
  | ChangeStatusTaskSuccess
  | ChangeStatusTaskFailed
