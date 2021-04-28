import { FC } from 'react'
import styled from 'styled-components'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { TaskStatus, CountTaskByStatus, Sort } from '../../types'

type Props = {
	countTasks: CountTaskByStatus
}

const NavMenu: FC<Props> = ({ countTasks }) => {
	const { activeTask, completedTask } = countTasks

	const { filterType } = useTypedSelector(state => state.tasks)
	const { selectFilter, clearCompleted } = useActions()

	if (activeTask === 0 && completedTask === 0) {
		return null
	}

	const handleClick = (status: Sort) => () => selectFilter(status)
	return (
		<>
			<Wrapper>
				<Inner>
					<Status>
						<strong>{activeTask}</strong> items left
					</Status>
					<Navbar>
						<Menu>
							<MenuItem isActive={filterType === 'all'} onClick={handleClick('all')}>
								All
							</MenuItem>
							<MenuItem
								isActive={filterType === TaskStatus.ACTIVE}
								onClick={handleClick(TaskStatus.ACTIVE)}
							>
								Active
							</MenuItem>
							<MenuItem
								isActive={filterType === TaskStatus.COMPLETED}
								onClick={handleClick(TaskStatus.COMPLETED)}
							>
								Completed
							</MenuItem>
						</Menu>
					</Navbar>
					{!!completedTask && (
						<ClearCompletedButton onClick={clearCompleted}>
							Clear completed ({completedTask})
						</ClearCompletedButton>
					)}
				</Inner>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.footer`
	height: 24px;
	display: grid;
	padding: 0 15px;
	position: absolute;
	right: 0;
	left: 0;
	bottom: -31px;
	justify-self: center;
	align-self: center;
	color: #777;
	z-index: 1;
	text-align: center;

	&:before {
		content: '';
		position: absolute;
		right: 0;
		bottom: 31px;
		left: 0;
		width: 500px;
		height: 50px;
		z-index: -1;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), 0 6px 0 -3px rgba(255, 255, 255, 0.8),
			0 7px 1px -3px rgba(0, 0, 0, 0.3), 0 43px 0 -6px rgba(255, 255, 255, 0.8),
			0 44px 2px -6px rgba(0, 0, 0, 0.2);
	}
`

const Inner = styled.div`
	justify-self: center;
	align-self: center;
	display: grid;
	grid-template-columns: 2fr 6fr 2.5fr;
	width: 100%;
`

const Status = styled.div`
	font-size: 14px;
	padding: 5px;
`

const Navbar = styled.div`
	text-align: center;
`

const Menu = styled.ul`
	margin: 0;
	padding: 5px;
`

const MenuItem = styled.li<{ isActive: boolean }>`
	display: inline;
	margin-right: 5px;
	font-size: 14px;
	cursor: pointer;
	${({ isActive }) => isActive && 'font-weight: 700;'}
`

const ClearCompletedButton = styled.button`
	padding: 5px;
	text-align: center;
	font-size: 10px;
	margin: 0;
	background-color: rgba(0, 0, 0, 0.1);
	height: 20px;
	align-self: center;
	border: none;
	border-radius: 3px;
	box-shadow: 0 -1px 0 0 rgb(0 0 0 / 20%);
	cursor: pointer;
	transition: background 0.1s linear;
	outline: none;
`

export default NavMenu
