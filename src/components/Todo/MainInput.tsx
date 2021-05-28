import React, { FC, KeyboardEvent, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import useActions from '@hooks//useActions'
import { getCountTasks, getTaskList } from '@selectors//tasks'
import { TaskStatus } from '@type//'
import { Checkbox, checkBoxVariant } from '../common'

const MainInput: FC = () => {
  const [value, setValue] = useState<string>('')
  const { createTaskRequest, changeAllStatusRequest } = useActions()

  const taskList = useSelector(getTaskList)
  const countTasks = useSelector(getCountTasks)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const handleKeyPress = async (e: KeyboardEvent) => {
    const taskText = value.trim()

    if (e.key === 'Enter' && taskText) {
      e.preventDefault()
      createTaskRequest(value)
      setValue('')
    }
  }

  const isAllTasksCompleted = useMemo(
    () => taskList.every((task) => task.status === 'completed'),
    [taskList]
  )

  const handleChangeStatusTasks = () => {
    const taskStatus: TaskStatus = isAllTasksCompleted
      ? TaskStatus.ACTIVE
      : TaskStatus.COMPLETED

    const ids = taskList.map((task) => task.id)
    changeAllStatusRequest(ids, taskStatus)
  }

  return (
    <>
      <MainHeader />
      <MainContainer>
        <StyledCheckBox
          isHidden={!taskList.length}
          isChecked={isAllTasksCompleted}
          variant={checkBoxVariant.secondary}
          onChange={handleChangeStatusTasks}
        />
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Whats need to be done?"
        />
      </MainContainer>
    </>
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

const StyledCheckBox = styled(Checkbox)<{ isHidden: boolean }>`
  ${({ isHidden }) => isHidden && 'visibility: hidden'}
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px dotted #ccc;
  position: relative;
`

const MainHeader = styled.div`
  width: 100%;
  height: 16px;
  border-bottom: 1px solid #1564b3;
  background-color: #1976d2;
  margin-top: 20px;
  position: relative;
`

export default MainInput
