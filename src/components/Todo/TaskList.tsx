import { FC } from 'react'
import styled from 'styled-components'
import { Task } from '../../types'

import TaskItem from './TaskItem'

type Props = {
	taskListToRender: Task[]
}

const TaskList: FC<Props> = ({ taskListToRender }) => {
	return (
		<List>
			{taskListToRender.map((task: any) => (
				<TaskItem task={task} key={task.id} />
			))}
		</List>
	)
}

const List = styled.ul`
	overflow-y: auto;
	overflow-x: hidden;
	max-height: 305px;
	&::-webkit-scrollbar {
		width: 0.8em;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	&::-webkit-scrollbar-thumb {
		background-color: #1976d2;
		border-radius: 3px;
	}
`

export default TaskList
