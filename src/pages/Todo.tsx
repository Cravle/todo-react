import { FC, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router'
import { useSelector } from 'react-redux'

import { TaskStatus } from '../types'
import { MainInput, Logo, NavMenu, TaskList } from '../components/Todo'
import { Checkbox, checkBoxVariant } from '../components/common'
import useActions from '../hooks/useActions'
import {
  getCountTasks,
  getFilterType,
  getTaskList,
} from '../redux/selectors/tasks'

const Todo: FC = () => {
  const history = useHistory()

  const query = new URLSearchParams(useLocation().search)
  const status = query.get('status') || 'all'
  const taskList = useSelector(getTaskList)
  const filterType = useSelector(getFilterType)
  const { changeAllStatusRequest, getTaskRequest, selectFilter } = useActions()
  const countTasks = useSelector(getCountTasks)

  useEffect(() => {
    selectFilter(status)
    getTaskRequest(filterType)
  }, [status])

  // const taskListToRender: Task[] = useMemo(
  //   () =>
  //     taskList.filter(
  //       (task) => filterType === 'all' || task.status === filterType
  //     ),
  //   [filterType, taskList]
  // )

  const isAllTasksCompleted = useMemo(
    () => !!taskList.length && countTasks.completed === taskList.length,
    [countTasks, taskList.length]
  )

  const handleChangeStatusTasks = () => {
    const status: TaskStatus = isAllTasksCompleted
      ? TaskStatus.ACTIVE
      : TaskStatus.COMPLETED

    const ids = taskList.map((task) => task.id)
    changeAllStatusRequest(ids, status)
  }

  if (!localStorage.user) {
    history.push('/login')
  }

  return (
    <Container>
      <Logo />
      <DecorationBlock />
      <Wrapper>
        <Inner>
          <MainContainer>
            <StyledCheckBox
              isHidden={!taskList.length}
              isChecked={isAllTasksCompleted}
              variant={checkBoxVariant.secondary}
              onChange={handleChangeStatusTasks}
            />
            <MainInput />
          </MainContainer>
          <TaskList />
        </Inner>
      </Wrapper>
      <NavMenu />
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`

const Wrapper = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
  z-index: 1;
`

const StyledCheckBox = styled(Checkbox)<{ isHidden: boolean }>`
  ${({ isHidden }) => isHidden && 'visibility: hidden'}
`

const Inner = styled.div`
  position: relative;
  &:before {
    content: '';
    border-left: 1px solid #f5d6d6;
    border-right: 1px solid #f5d6d6;
    width: 2px;
    position: absolute;
    top: 0;
    left: 43px;
    height: 100%;
    z-index: 3;
  }
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px dotted #ccc;
`

const DecorationBlock = styled.div`
  width: 100%;
  height: 16px;
  border-bottom: 1px solid #1564b3;
  background-color: #1976d2;
  margin-top: 20px;
  z-index: 2;
  position: relative;
  &:before {
    content: '';
    border-left: 1px solid #f5d6d6;
    border-right: 1px solid #f5d6d6;
    width: 2px;
    position: absolute;
    top: 0;
    left: 43px;
    height: 100%;
    z-index: 2;
    opacity: 0.1;
  }
`

export default Todo
