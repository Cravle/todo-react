import React, { FC, KeyboardEvent, useState } from 'react'
import styled from 'styled-components'
import { useActions } from '../../hooks/useActions'

const MainInput: FC = () => {
	const [value, setValue] = useState<string>('')
	const { addTask } = useActions()
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value)

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			const taskText = value.trim()
			if (taskText.length) {
				addTask(value)
			}
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
