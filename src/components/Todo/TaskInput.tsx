import {
  ChangeEvent,
  FC,
  useState,
  KeyboardEvent,
  useRef,
  useEffect,
} from 'react'
import styled from 'styled-components'

import useActions from '@hooks//useActions'

import { TaskStatus, Task } from '@type//'

type Props = {
  task: Task
  handleSetEditTask: (value: boolean) => void
  isEdit: boolean
  status: TaskStatus
  canDrop: boolean
}

const TaskInput: FC<Props> = ({
  task,
  isEdit,
  status,
  handleSetEditTask,
  canDrop,
}) => {
  const [value, setValue] = useState<string>(task.text)
  const inputEl = useRef<HTMLInputElement | null>(null)

  const { removeTaskRequest, updateTaskRequest } = useActions()

  const handleDblClick = () => {
    handleSetEditTask(true)
  }

  const handleEditTask = () => {
    const text = value.trim()

    if (text.length) {
      updateTaskRequest(task.id, text, task.status)
      handleSetEditTask(false)
    } else {
      handleSetEditTask(false)
      removeTaskRequest(task.id)
    }
  }

  useEffect(() => {
    setValue(task.text)
  }, [task.text])

  useEffect(() => {
    if (isEdit) {
      inputEl.current?.focus()
    }
  }, [isEdit])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleEditTask()
    }
  }

  return (
    <Wrapper onDoubleClick={handleDblClick}>
      <Input
        ref={inputEl}
        disabled={!isEdit}
        status={status}
        onKeyPress={handleKeyPress}
        onBlur={handleEditTask}
        onChange={handleChange}
        value={value}
        canDrop={canDrop}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  position: absolute;
  display: grid;
  height: 58px;
  width: 438px;
  align-self: center;
  background-color: #fff;
`

const Input = styled.input<{
  disabled: boolean
  status: TaskStatus
  canDrop: boolean
}>`
  height: 58px;
  width: 431px;
  display: grid;
  font-size: 20px;
  outline: none;
  padding-left: 5px;
  align-self: center;
  background-color: ${({ canDrop }) =>
    canDrop ? '#1564b3;' : 'transparent;'}  
  border: ${({ disabled }) =>
    disabled ? '1px solid transparent;' : '1px solid #9c9c9c;'};
  ${({ status }) =>
    status === TaskStatus.COMPLETED &&
    'text-decoration:line-through; color: #c0c0c0;'};
  ${({ disabled }) => !disabled && 'z-index: 2;'}
`

export default TaskInput
