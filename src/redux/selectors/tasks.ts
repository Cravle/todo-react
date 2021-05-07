import { CountTasks, Task } from '../../types'
import { RootState } from '../reducers'

export const getTaskList = (state: RootState): Task[] => state.tasks.taskList

export const getFilterType = (state: RootState): string =>
  state.tasks.filterType

export const getCountTasks = (state: RootState): CountTasks => state.tasks.count
