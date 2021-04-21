import styled from 'styled-components'

import Logo from './components/Logo'
import Todo from './components/Todo'
import NavMenu from './components/Footer'

const App = () => {
	return (
		<Wrapper>
			<Container>
				<Logo />
				<DecorationBlock />
				<Todo />
				<NavMenu />
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

const DecorationBlock = styled.div`
	width: 100%;
	height: 16px;
	border-bottom: 1px solid #6c615c;
	background-color: #8d7d77;
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

export default App
