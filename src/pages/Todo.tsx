import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'

import { MainInput, Logo, NavMenu, TaskList } from '@components//Todo'
// @ts-ignore
import useActions from '@hooks/useActions'

const Todo: FC = () => {
  const query = new URLSearchParams(useLocation().search)
  const status = query.get('status') || 'all'
  const { getTaskRequest, selectFilter } = useActions()

  useEffect(() => {
    selectFilter(status)
    getTaskRequest(status)
  }, [status])

  return (
    <Container>
      <Logo />
      <Wrapper>
        <Inner>
          <MainInput />
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

export default Todo
