import { TasksAction, TasksActionTypes, TasksState } from '@type//tasks'

const initialState: TasksState = {
  taskList: [],
  filterType: 'all',
  count: {
    active: 0,
    completed: 0,
  },
}

const tasksReducer = (
  state = initialState,
  action: TasksAction
): TasksState => {
  switch (action.type) {
    case TasksActionTypes.SET_FILTER:
      return { ...state, filterType: action.filter }

    case TasksActionTypes.GET_TASK_SUCCESS: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default tasksReducer
