import styled from 'styled-components'
import React, { FC, KeyboardEvent, useState } from 'react'

type Props = {
	handleAddTask: (value: string) => void
}

const MainInput: FC<Props> = ({ handleAddTask }) => {
	const [value, setValue] = useState<string>('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setValue(event.target.value)

	const handleKeyPress = (event: KeyboardEvent): void => {
		if (event.key === 'Enter') {
			event.preventDefault()
			handleAddTask(value)
			setValue('')
		}
	}

	return (
		<Input
			type='text'
			value={value}
			onChange={handleChange}
			onKeyPress={handleKeyPress}
			placeholder='Whats need to be done?'
		/>
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

export default MainInput
