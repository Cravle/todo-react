import { FC } from 'react'
import styled from 'styled-components'

type Props = {
	onClick: () => void
	isDisabled?: boolean
}

const DeleteButton: FC<Props> = ({ onClick, isDisabled }) => {
	return (
		<Button disabled={isDisabled} onClick={onClick}>
			✖
		</Button>
	)
}

const Button = styled.button`
	display: grid;
	outline: none;
	border: none;
	justify-self: center;
	align-self: center;
	background: #fff;
	color: #ae8888;
	font-weight: 700;
	cursor: pointer;
	transition: font-size 0.2s linear;
	z-index: 1;

	&:hover {
		font-size: 24px;
		text-shadow: 0 0 1px #000, 0 0 10px rgba(199, 107, 107, 0.8);
	}
`


export default DeleteButton
