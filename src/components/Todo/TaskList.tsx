import { FC, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import update from 'immutability-helper'

import { Items } from '@constants//'
import { getCountTasks, getTaskList } from '@selectors//tasks'
import useActions from '@hooks//useActions'
import { Task } from '@type//'
import TaskItem from './TaskItem'

const TaskList: FC = () => {
  const taskList = useSelector(getTaskList)
  const count = useSelector(getCountTasks)
  const { getTaskSuccess } = useActions()

  const moveTask = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = taskList[dragIndex]
      getTaskSuccess({
        taskList: update(taskList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
        count,
      })
    },
    [taskList]
  )

  return (
    <List>
      {taskList.map((task: Task, i) => (
        <TaskItem moveTask={moveTask} task={task} key={task.id} index={i} />
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
