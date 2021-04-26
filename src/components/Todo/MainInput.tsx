import React, { FC, KeyboardEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
	handleAddTask: (value: string) => void
}

const MainInput: FC<Props> = ({ handleAddTask }) => {
	const [value, setValue] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault()
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
