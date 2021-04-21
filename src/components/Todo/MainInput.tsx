import styled from 'styled-components'

const MainInput: React.FC = () => {
	return <Input type='text' placeholder='Whats need to be done?' />
}

const Input = styled.input`
	border: none;
	width: 9fr;
	height: 60px;
	font-size: 24px;
	padding-left: 10px;
	outline: none;
`

export default MainInput
