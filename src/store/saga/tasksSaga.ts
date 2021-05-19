import { put, takeEvery, call, select } from 'redux-saga/effects'

import { getFilterType } from '@selectors//tasks'
import { Task, TaskResponse } from '@type//'
import * as taskTypes from '@type//tasks'
import { tasksAPI } from '@api//'
import * as actions from '@actions//tasks'
import { refreshTokenRequest } from '@actions//user'

function* getTasksWorker(action: taskTypes.GetTaskRequest) {
  try {
    console.log(action.payload.status, 'action.payload.status')
    const res: TaskResponse = yield call(
      tasksAPI.getTasks,
      action.payload.status
    )

    const taskList: Task[] = res.tasks.map((task: Task) => ({
      text: task.text,
      status: task.status,
      id: task.id,
      isEdit: false,
    }))

    const payload = {
      taskList,
      count: res.count,
    }

    yield put(actions.getTaskSuccess(payload))
  } catch (e) {
    if (e?.response?.status === 401) {
      yield put(refreshTokenRequest())
    }
    yield put(actions.getTaskFailed())
  }
}

function* updateTasksWorker(action: taskTypes.UpdateTaskRequest) {
  try {
    yield call(
      tasksAPI.updateTask,
      action.payload.id,
      action.payload.text,
      action.payload.status
    )

    yield put(actions.updateTaskSuccess())
    const filterType: string = yield select(getFilterType)

    yield put(actions.getTaskRequest(filterType))
  } catch (e) {
    if (e?.response?.status === 401) {
      yield put(refreshTokenRequest())
    }
    yield put(actions.updateTaskFailed())
  }
}

function* createTasksWorker(action: taskTypes.CreateTaskRequest) {
  try {
    yield call(tasksAPI.addTask, action.payload.text, 'active')

    yield put(actions.createTaskSuccess())

    const filterType: string = yield select(getFilterType)

    yield put(actions.getTaskRequest(filterType))
  } catch (e) {
    yield put(actions.createTaskFailed())
  }
}

function* removeTasksWorker(action: taskTypes.RemoveTaskRequest) {
  try {
    yield call(tasksAPI.deleteTask, action.payload.id)

    yield put(actions.createTaskSuccess())
    const filterType: string = yield select(getFilterType)

    yield put(actions.getTaskRequest(filterType))
  } catch (e) {
    yield put(actions.createTaskFailed())
  }
}

function* removeCompletedTasksWorker(
  action: taskTypes.RemoveCompletedTaskRequest
) {
  try {
    yield call(tasksAPI.deleteCompleted, action.payload.ids)

    yield put(actions.removeCompletedTaskSuccess())
    const filterType: string = yield select(getFilterType)

    yield put(actions.getTaskRequest(filterType))
  } catch (e) {
    yield put(actions.removeCompletedTaskFailed())
  }
}

function* changeStatusTaskWorker(action: taskTypes.ChangeStatusTaskRequest) {
  try {
    yield call(
      tasksAPI.changeAllStatus,
      action.payload.ids,
      action.payload.status
    )

    yield put(actions.changeAllStatusSuccess())
    const filterType: string = yield select(getFilterType)

    yield put(actions.getTaskRequest(filterType))
  } catch (e) {
    yield put(actions.changeAllStatusFailed())
  }
}

export function* tasksWatcher() {
  yield takeEvery(taskTypes.TasksActionTypes.GET_TASK_REQUEST, getTasksWorker)
  yield takeEvery(
    taskTypes.TasksActionTypes.UPDATE_TASK_REQUEST,
    updateTasksWorker
  )
  yield takeEvery(
    taskTypes.TasksActionTypes.CREATE_TASK_REQUEST,
    createTasksWorker
  )
  yield takeEvery(
    taskTypes.TasksActionTypes.REMOVE_TASK_REQUEST,
    removeTasksWorker
  )
  yield takeEvery(
    taskTypes.TasksActionTypes.REMOVE_COMPLETED_TASK_REQUEST,
    removeCompletedTasksWorker
  )
  yield takeEvery(
    taskTypes.TasksActionTypes.CHANGE_STATUS_TASK_REQUEST,
    changeStatusTaskWorker
  )
}