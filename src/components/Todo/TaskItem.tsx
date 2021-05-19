import { FC, useState } from 'react'
import styled from 'styled-components'

import { TaskStatus, Task } from '@type//'
import useActions from '@hooks//useActions'
import { Checkbox, checkBoxVariant, DeleteButton } from '../common'
import TaskInput from './TaskInput'

type Props = {
  task: Task
}

const TaskItem: FC<Props> = ({ task }) => {
  const { updateTaskRequest, removeTaskRequest } = useActions()

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleSetEditTask = (value: boolean) => {
    setIsEdit(value)
  }

  const handleChangeStatus = () => {
    const status =
      task.status === TaskStatus.ACTIVE
        ? TaskStatus.COMPLETED
        : TaskStatus.ACTIVE
    updateTaskRequest(task.id, task.text, status)
  }

  const handleDeleteTask = () => removeTaskRequest(task.id)

  return (
    <Wrapper>
      <StyledCheckBox
        variant={checkBoxVariant.primary}
        isChecked={task.status === TaskStatus.COMPLETED}
        isHidden={isEdit}
        onChange={handleChangeStatus}
      />
      <TaskWrapper>
        <TaskInput
          status={task.status}
          handleSetEditTask={handleSetEditTask}
          isEdit={isEdit}
          task={task}
        />
      </TaskWrapper>
      <DeleteButton onClick={handleDeleteTask} isHidden={isEdit} />
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
