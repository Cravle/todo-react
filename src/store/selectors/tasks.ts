import { Task, Sort } from '../../types'
import { RootState } from '../reducers'

export const getTaskList = (state: RootState): Task[] => state.tasks.taskList

export const getFilterType = (state: RootState): Sort => state.tasks.filterType
