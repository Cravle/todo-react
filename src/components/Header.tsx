import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import useActions from '@hooks//useActions'
import { getIsAuth } from '@selectors//user'
import { clearLS } from '@utils/'

const Header: FC = () => {
  const history = useHistory()

  const isAuth = useSelector(getIsAuth)
  const { setIsAuth } = useActions()
  const handleClick = () => {
    clearLS()
    setIsAuth(false)
    history.push('/login')
  }

  return (
    <Container>
      {isAuth && <Button onClick={handleClick}>Log out</Button>}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: #1564b3;
  display: grid;
`

const Button = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  justify-self: end;
  align-self: center;
  cursor: pointer;
  margin-right: 15px;
`

export default Header
