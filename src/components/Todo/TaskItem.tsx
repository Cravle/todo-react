import { FC } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Checkbox, checkBoxVariant, DeleteButton } from '../common'
import { TaskStatus, Task } from '../../types'
import TaskInput from './TaskInput'
import useActions from '../../hooks/useActions'
import { getFilterType } from '../../redux/selectors/tasks'

type Props = {
  task: Task
}

const TaskItem: FC<Props> = ({ task }) => {
  const { updateTask, removeTask, getTasks } = useActions()
  const filterType = useSelector(getFilterType)

  const handleChangeStatus = async () => {
    const status =
      task.status === TaskStatus.ACTIVE
        ? TaskStatus.COMPLETED
        : TaskStatus.ACTIVE
    await updateTask(task.id, task.text, status)
    getTasks(filterType)
  }

  const handleDeleteTask = async () => {
    await removeTask(task.id)
    getTasks(filterType)
  }

  return (
    <Wrapper>
      <StyledCheckBox
        variant={checkBoxVariant.primary}
        isChecked={task.status === TaskStatus.COMPLETED}
        isHidden={task.isEdit}
        onChange={handleChangeStatus}
      />
      <TaskWrapper>
        <TaskInput status={task.status} isEdit={task.isEdit} task={task} />
      </TaskWrapper>
      <DeleteButton onClick={handleDeleteTask} isHidden={task.isEdit} />
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: grid;
  height: 60px;
  background-color: #fff;
  list-style: none;
  grid-template-columns: 1fr 8fr 1fr;
  position: relative;
  border-bottom: 1px dotted #ccc;
  z-index: 2;
`

const TaskWrapper = styled.div`
  width: 100%;
  font-size: 24px;
  display: grid;
  align-self: center;
  position: relative;
  background-color: #fff;
`

const StyledCheckBox = styled(Checkbox)<{ isHidden: boolean }>`
  ${({ isHidden }) => isHidden && 'visibility: hidden'}
`

export default TaskItem
