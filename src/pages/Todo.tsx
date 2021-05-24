import { FC, SyntheticEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import { MainInput, Logo, NavMenu, TaskList } from '@components//Todo'
// @ts-ignore
import useActions from '@hooks/useActions'
import { socket } from '@api//socket'

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Todo: FC = () => {
  const query = new URLSearchParams(useLocation().search)
  const status = query.get('status') || 'all'
  const { getTaskRequest, selectFilter } = useActions()
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    selectFilter(status)
    getTaskRequest()
  }, [status])

  const handleOpenSuccess = () => setSuccess(true)
  const handleOpenError = () => setError(true)

  useEffect(() => {
    socket.emit('JOIN_ROOM', localStorage.getItem('token'))

    socket.on('TASKS_UPDATED', () => {
      handleOpenSuccess()
      getTaskRequest()
    })

    socket.on('disconnect', () => handleOpenError())
  }, [])

  const handleCloseSuccess = (
    event: SyntheticEvent<HTMLLinkElement>,
    reason: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setSuccess(false)
  }

  const handleCloseError = (
    event: SyntheticEvent<HTMLLinkElement>,
    reason: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setError(false)
  }

  return (
    <>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleCloseSuccess} severity="success">
          Tasks were updated.
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleCloseError} severity="error">
          Connection closed
        </Alert>
      </Snackbar>
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
    </>
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
