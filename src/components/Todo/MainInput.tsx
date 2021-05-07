import React, { FC, KeyboardEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import useActions from '../../hooks/useActions'
import { getFilterType } from '../../redux/selectors/tasks'

const MainInput: FC = () => {
  const [value, setValue] = useState<string>('')
  const { createTask, getTasks } = useActions()
  const filterType = useSelector(getFilterType)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const handleKeyPress = async (e: KeyboardEvent) => {
    const taskText = value.trim()

    if (e.key === 'Enter' && taskText) {
      e.preventDefault()

      await createTask(value)
      getTasks(filterType)
      setValue('')
    }
  }

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder="Whats need to be done?"
    />
  )
}

const Input = styled.input`
  border: none;
  width: 9fr;
  height: 60px;
  font-size: 24px;
  padding-left: 10px;
  outline: none;
  z-index: 2;
`

export default MainInput
