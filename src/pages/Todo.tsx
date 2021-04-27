import { useState, FC, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router'

import { Sort, TaskStatus, Task } from '../types'
import { MainInput, Logo, NavMenu, TaskList } from '../components/Todo/'
import { Checkbox, checkBoxVariant } from '../components/common'
import { getItem, setItem } from '../utils'

const Todo: FC = () => {
	let history = useHistory()

	const defaultList = getItem('taskList') ? getItem('taskList') : []

	const defaultType: Sort = getItem('selectedType') || 'all'
	const [taskList, setTaskList] = useState<Task[]>(defaultList)
	const [selectedType, setSelectedType] = useState<Sort>(defaultType)

	useEffect(() => {
		setItem('taskList', JSON.stringify(taskList))
		setItem('selectedType', JSON.stringify(selectedType))
	}, [taskList, selectedType])

	const taskListToRender: Task[] = useMemo(
		() => taskList.filter(task => selectedType === 'all' || task.status === selectedType),
		[selectedType, taskList]
	)

	const countTasks = useMemo(
		() =>
			taskList.reduce(
				(acc, { status }) =>
					status === TaskStatus.ACTIVE
						? { ...acc, activeTask: acc.activeTask + 1 }
						: { ...acc, completedTask: acc.completedTask + 1 },
				{
					activeTask: 0,
					completedTask: 0,
				}
			),
		[taskList]
	)

	const isAllTasksCompleted = useMemo(
		() => !!taskList.length && countTasks.completedTask === taskList.length,
		[countTasks, taskList.length]
	)

	const handleAddTask = (text: string) => {
		const taskText = text.trim()
		if (!taskText.length) {
			return
		}

		setTaskList([
			...taskList,
			{
				id: uuidv4(),
				isEdit: false,
				status: TaskStatus.ACTIVE,
				text: taskText,
			},
		])
	}

	const handleChangeStatusTasks = () => {
		const newTaskList: Task[] = taskList.map(task => ({
			...task,
			status: !isAllTasksCompleted ? TaskStatus.COMPLETED : TaskStatus.ACTIVE,
		}))

		setTaskList(newTaskList)
	}

	const handleClearAllCompletedTasks = () => {
		const newTaskList: Task[] = taskList.filter(task => task.status === TaskStatus.ACTIVE)
		setTaskList(newTaskList)
	}

	const handleSelectType = (sortType: Sort) => {
		setSelectedType(sortType)
	}

	if (!localStorage.user) {
		history.push('/login')
	}

	return (
		<Container>
			<Logo />
			<DecorationBlock />
			<Wrapper>
				<Inner>
					<MainContainer>
						<StyledCheckBox
							isHidden={!taskList.length}
							isChecked={isAllTasksCompleted}
							variant={checkBoxVariant.secondary}
							onChange={handleChangeStatusTasks}
						/>
						<MainInput handleAddTask={handleAddTask} />
					</MainContainer>
					<TaskList state={[taskListToRender, setTaskList]} />
				</Inner>
			</Wrapper>
			<NavMenu
				selectedType={selectedType}
				countTasks={countTasks}
				handleSelectType={handleSelectType}
				handleClear={handleClearAllCompletedTasks}
			/>
		</Container>
	)
}

const Container = styled.div`
	max-width: 500px;
	margin: 0 auto;
	position: relative;
`

const Wrapper = styled.div`
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
	z-index: 1;
`

const StyledCheckBox = styled(Checkbox)<{ isHidden: boolean }>`
	${({ isHidden }) => isHidden && 'visibility: hidden'}
`

const Inner = styled.div`
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
		z-index: 3;
	}
`

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 9fr;
	height: 60px;
	background-color: #fff;
	border-bottom: 1px dotted #ccc;
`

const DecorationBlock = styled.div`
	width: 100%;
	height: 16px;
	border-bottom: 1px solid #1564b3;
	background-color: #1976d2;
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

export default Todo
