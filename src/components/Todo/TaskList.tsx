import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'

import { Status, Task } from '../../types'
import TaskItem from './TaskItem'

type Props = {
	state: [Task[], Dispatch<SetStateAction<Task[]>>]
}

const TaskList: FC<Props> = ({ state }) => {
	const [taskList, setTaskList] = state

	const handleChangeStatus = (id: string) => () => {
		const newTaskList: Task[] = taskList.map(task =>
			task.id === id
				? { ...task, status: task.status === Status.COMPLETED ? Status.ACTIVE : Status.COMPLETED }
				: task
		)
		setTaskList(newTaskList)
	}

	const handleDeleteTask = (id: string) => () => {
		const newTask: Task[] = taskList.filter(task => task.id !== id)
		setTaskList(newTask)
	}

	const handleDblClick = (id: string) => () => {
		const newTaskList: Task[] = taskList.map(task => (task.id === id ? { ...task, isEdit: true } : task))
		setTaskList(newTaskList)
	}

	const handleEditTask = (id: string, text: string) => {
		text = text.trim()

		const newTaskList: Task[] = text.length
			? taskList.map(task => (task.id === id ? { ...task, text, isEdit: false } : task))
			: taskList.filter(task => task.id !== id)
		setTaskList(newTaskList)
	}

	return (
		<List>
			{taskList.map((task: any) => (
				<TaskItem
					task={task}
					key={task.id}
					handleChangeStatus={handleChangeStatus(task.id)}
					handleDeleteTask={handleDeleteTask(task.id)}
					handleDblClick={handleDblClick(task.id)}
					handleEditTask={handleEditTask}
				/>
			))}
		</List>
	)
}

const List = styled.ul`
	overflow-y: auto;
	max-height: 305px;
	&::-webkit-scrollbar {
		width: 0.8em;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	&::-webkit-scrollbar-thumb {
		background-color: #8d7d77;
		border-radius: 3px;
	}
`

export default TaskList
