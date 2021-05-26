import { FC, useState } from 'react'
import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'

import { TaskStatus, Task } from '@type//'
import { Items } from '@constants//'
import useActions from '@hooks//useActions'
import TaskInput from './TaskInput'
import { Checkbox, checkBoxVariant, DeleteButton } from '../common'

type Props = {
  moveTask: (dragIndex: number, dropIndex: number) => void
  task: Task
  index: number
}

type DragItem = {
  index: number
  id: string
  type: string
}

const TaskItem: FC<Props> = ({ task, moveTask, index }) => {
  const { updateTaskRequest, removeTaskRequest } = useActions()

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const [{ isDragging }, drag] = useDrag({
    type: Items.TASKS,
    item: () => {
      return { ...task, index }
    },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Items.TASKS,
    drop: (dropItem: any) => moveTask(dropItem.index, index),
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

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
    <Wrapper ref={drop}>
      <Container
        ref={drag}
        isDragging={isDragging}
        canDrop={canDrop && isOver && !isDragging}
      >
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
            canDrop={canDrop && isOver && !isDragging}
          />
        </TaskWrapper>
        <DeleteButton onClick={handleDeleteTask} isHidden={isEdit} />
      </Container>
    </Wrapper>
  )
}

const Container = styled.div<{ isDragging: boolean; canDrop: boolean }>`
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  display: grid;
  height: 60px;
  background-color: #fff;
  list-style: none;
  grid-template-columns: 1fr 8fr 1fr;
  position: relative;
  border-bottom: 1px dotted #ccc;
  z-index: 2;
  ${({ canDrop }) => canDrop && 'background-color: #1564b3;'}
`

const Wrapper = styled.li`
  display: block;
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
  ${({ isHidden }) => isHidden && 'visibility: hidden;'}
`

export default TaskItem
