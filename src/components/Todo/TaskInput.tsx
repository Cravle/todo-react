import { ChangeEvent, FC, useState, FocusEvent, KeyboardEvent, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { Status, Task } from '../../types'

type Props = {
	task: Task
	handleEditTask: (id: string, text: string) => void
	handleDblClick: () => void
	isEdit: boolean
	status: Status
}

const TaskInput: FC<Props> = ({ task, handleEditTask, handleDblClick, isEdit, status }) => {
	const [value, setValue] = useState<string>(task.text)
	const inputEl = useRef<HTMLInputElement | null>(null)

	useEffect(() => {
		if (isEdit) {
			inputEl.current?.focus()
		}
	}, [isEdit])

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => handleEditTask(task.id, event.target.value)

	const handleKeyPress = (event: KeyboardEvent): void => {
		if (event.key === 'Enter') {
			event.preventDefault()
			handleEditTask(task.id, value)
		}
	}

	return (
		<Wrapper onDoubleClick={handleDblClick}>
			<Input
				ref={inputEl}
				disabled={!isEdit}
				status={status}
				onKeyPress={handleKeyPress}
				onBlur={handleBlur}
				onChange={handleChange}
				value={value}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.label`
	position: absolute;
	display: grid;
	height: 58px;
	width: 438px;
	align-self: center;
`

const Input = styled.input<{ disabled: boolean; status: Status }>`
	height: 58px;
	width: 438px;
	display: grid;
	font-size: 20px;
	outline: none;
	padding-left: 10px;
	align-self: center;
	border: ${({ disabled }) => (disabled ? '1px solid transparent;' : '1px solid #9c9c9c;')};
	${({ status }) => status === Status.COMPLETED && 'text-decoration:line-through; color: #c0c0c0'};
	${({ disabled }) => !disabled && 'z-index: 2'}
`

export default TaskInput
