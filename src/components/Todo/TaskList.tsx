import { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getTaskList } from '../../store/selectors/tasks'
import { Task } from '../../types'
import TaskItem from './TaskItem'

const TaskList: FC = () => {
  const taskList = useSelector(getTaskList)
  return (
    <List>
      {taskList.map((task: Task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </List>
  )
}

const List = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 305px;
  &::-webkit-scrollbar {
    width: 0.8em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1976d2;
    border-radius: 3px;
  }
`

export default TaskList
