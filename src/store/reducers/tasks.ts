import { TasksAction, TasksActionTypes, TasksState } from '@type//tasks'

const initialState: TasksState = {
  taskList: [],
  filterType: 'all',
  count: 0,
  page: 1,
}

const tasksReducer = (
  state = initialState,
  action: TasksAction
): TasksState => {
  switch (action.type) {
    case TasksActionTypes.SET_FILTER:
      return { ...state, filterType: action.filter }

    case TasksActionTypes.SET_PAGE:
      return { ...state, page: action.payload }

    case TasksActionTypes.GET_TASK_SUCCESS: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default tasksReducer
