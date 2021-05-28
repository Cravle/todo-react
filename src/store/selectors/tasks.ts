import { CountTasks, Task } from '../../types'
import { RootState } from '..'

export const getTaskList = (state: RootState): Task[] => state.tasks.taskList

export const getFilterType = (state: RootState): string =>
  state.tasks.filterType

export const getCountTasks = (state: RootState): number => state.tasks.count

export const getPage = (state: RootState): number => state.tasks.page
