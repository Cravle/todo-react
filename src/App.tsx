import { FC } from 'react'
import styled from 'styled-components'

import Logo from './components/Logo'
import Todo from './components/Todo'

const App: FC = () => {
	return (
		<Wrapper>
			<Container>
				<Todo />
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #eaeaea;
	height: 100%;
	width: 100%;
	position: absolute;
`

const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
	position: relative;
`

export default App
