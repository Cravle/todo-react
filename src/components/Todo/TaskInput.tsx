import {
  ChangeEvent,
  FC,
  useState,
  KeyboardEvent,
  useRef,
  useEffect,
} from 'react'
import styled from 'styled-components'
import useActions from '../../hooks/useActions'

import { TaskStatus, Task } from '../../types'

type Props = {
  task: Task
  isEdit: boolean
  status: TaskStatus
}

const TaskInput: FC<Props> = ({ task, isEdit, status }) => {
  const [value, setValue] = useState<string>(task.text)
  const inputEl = useRef<HTMLInputElement | null>(null)

  const { setEdit, removeTaskRequest, updateTaskRequest } = useActions()

  const handleDblClick = () => {
    setEdit(task.id)
  }

  const handleEditTask = () => {
    const text = value.trim()
    if (text.length) {
      updateTaskRequest(task.id, text, task.status)
    } else {
      removeTaskRequest(task.id)
    }
  }

  useEffect(() => {
    if (isEdit) {
      inputEl.current?.focus()
    }
  }, [isEdit])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  const handleBlur = () => handleEditTask()

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
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
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

const Input = styled.input<{ disabled: boolean; status: TaskStatus }>`
  height: 58px;
  width: 431px;
  display: grid;
  font-size: 20px;
  outline: none;
  padding-left: 5px;
  align-self: center;
  background-color: transparent;
  border: ${({ disabled }) =>
    disabled ? '1px solid transparent;' : '1px solid #9c9c9c;'};
  ${({ status }) =>
    status === TaskStatus.COMPLETED &&
    'text-decoration:line-through; color: #c0c0c0;'};
  ${({ disabled }) => !disabled && 'z-index: 2'}
`

export default TaskInput
