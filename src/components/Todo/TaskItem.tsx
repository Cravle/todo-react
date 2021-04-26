import { FC } from 'react'
import styled from 'styled-components'

import { Checkbox, checkBoxVariant } from '../common/'
import { DeleteButton } from '../common/'
import { TaskStatus, Task } from '../../types'
import TaskInput from './TaskInput'

type Props = {
	task: Task
	handleChangeStatus: () => void
	handleDeleteTask: () => void
	handleDblClick: () => void
	handleEditTask: (id: string, text: string) => void
}

const TaskItem: FC<Props> = ({
	task,
	handleChangeStatus,
	handleDeleteTask,
	handleDblClick,
	handleEditTask,
}) => {
	return (
		<Wrapper>
			<StyledCheckBox
				variant={checkBoxVariant.primary}
				isChecked={task.status === TaskStatus.COMPLETED}
				isHidden={task.isEdit}
				onChange={handleChangeStatus}
			/>
			<TaskWrapper>
				<TaskInput
					status={task.status}
					handleDblClick={handleDblClick}
					handleEditTask={handleEditTask}
					isEdit={task.isEdit}
					task={task}
				/>
			</TaskWrapper>
			<DeleteButton onClick={handleDeleteTask} />
		</Wrapper>
	)
}

const Wrapper = styled.li`
	display: grid;
	height: 60px;
	background-color: #fff;
	list-style: none;
	grid-template-columns: 1fr 8fr 1fr;
	position: relative;
	border-bottom: 1px dotted #ccc;
	z-index: 2;
`

const TaskWrapper = styled.div`
	width: 100%;
	font-size: 24px;
	display: grid;
	align-self: center;
	position: relative;
	background-color: #fff;
`

const StyledCheckBox = styled(Checkbox)<{ isHidden: boolean }>`
	${({ isHidden }) => isHidden && 'visibility: hidden'}
`

export default TaskItem
