import { FC, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'

import { clearLS, isLogin } from '../utils'

const Header: FC = () => {
	const history = useHistory()
	const location = useLocation()
	const [isAuthorized, setIsAuthorized] = useState<boolean>(isLogin())
	const handleClick = () => {
		clearLS()
		history.push('/')
	}

	useEffect(() => {
		setIsAuthorized(isLogin())
	}, [location])

	return (
		<Container>
			{isAuthorized && <Button onClick={handleClick}>Log out</Button>}
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
