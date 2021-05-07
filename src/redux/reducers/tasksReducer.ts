import { TasksAction, TasksActionTypes, TasksState } from '../../types/tasks'

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
    case TasksActionTypes.SET_EDIT: {
      const newTaskList = state.taskList.map((task) =>
        task.id === action.id ? { ...task, isEdit: true } : task
      )
      return { ...state, taskList: newTaskList }
    }
    case TasksActionTypes.GET_TASK_SUCCESS: {
      return { ...state, taskList: action.newTaskList, count: action.count }
    }
    default:
      return state
  }
}

export default tasksReducer
