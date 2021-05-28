import { FC, useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Pagination } from '@material-ui/lab'
import queryString from 'query-string'
import { useLocation, useHistory } from 'react-router'

import useActions from '@hooks//useActions'
import { TaskStatus } from '@type//'
import {
  getCountTasks,
  getFilterType,
  getPage,
  getTaskList,
} from '@selectors//tasks'
import { setPage } from '@store//actions/tasks'

const ALL = 'all'
const ACTIVE = 'active'
const COMPLETED = 'completed'

type Filters = { id: number; url: string; label: string }

const filters: Filters[] = [
  {
    id: 1,
    url: '',
    label: ALL,
  },
  {
    id: 2,
    url: '?status=active',
    label: ACTIVE,
  },
  {
    id: 3,
    url: '?status=completed',
    label: COMPLETED,
  },
]

const renderFilters = (
  handleClick: (status: string) => void,
  filterType: string
) => {
  return filters.map((filter) => {
    const query = queryString.stringify(
      {
        page: 1,
        status: filter.label === ALL ? null : filter.label,
      },
      {
        skipNull: true,
      }
    )
    return (
      <>
        <MenuItem
          isActive={filterType === filter.label}
          key={filter.id}
          onClick={() => handleClick(filter.label)}
        >
          <Link key={filter.id} to={{ search: query }}>
            {filter.label}
          </Link>
        </MenuItem>
      </>
    )
  })
}

const NavMenu: FC = () => {
  const taskList = useSelector(getTaskList)
  const filterType = useSelector(getFilterType)
  const total = useSelector(getCountTasks)
  const { setPage } = useActions()
  const history = useHistory()

  const query = new URLSearchParams(useLocation().search)
  const page = query.get('page') || 1

  const completed = useMemo(() => {
    return taskList.reduce(
      (acc, { status }) =>
        status !== COMPLETED
          ? { ...acc }
          : { ...acc, completedTask: acc.completedTask + 1 },
      {
        completedTask: 0,
      }
    ).completedTask
  }, [taskList])

  console.log(total)

  const {
    selectFilter,
    removeCompletedTaskRequest,
    getTaskRequest,
  } = useActions()

  const handleClear = () => {
    const ids: (string | undefined)[] = taskList.map((task) => {
      if (task.status === TaskStatus.COMPLETED) return task.id as string
    })

    const stringIds = JSON.stringify(ids)
    removeCompletedTaskRequest(stringIds)
  }

  const handleClick = (status: string) => () => {
    selectFilter(status)
  }
  const handlePage = (event: any, value: number) => {
    const query = queryString.stringify(
      {
        page: value,
        status: filterType === ALL ? null : filterType,
      },
      {
        skipNull: true,
      }
    )
    setPage(value)
    history.push({
      search: `?${query}`,
    })
    getTaskRequest()
  }

  const pages = Math.ceil(total / 5)

  if (pages && (page < 1 || page > pages)) {
    const query2 = queryString.stringify(
      {
        page: 1,
        status: filterType === ALL ? null : filterType,
      },
      {
        skipNull: true,
      }
    )
    history.push({
      search: `?${query2}`,
    })
  }

  if (!total) {
    return null
  }

  return (
    <>
      <Wrapper>
        <Inner>
          <Status>
            <strong>{total}</strong> Total
          </Status>
          <Navbar>
            <Menu>{renderFilters(handleClick, filterType)}</Menu>
          </Navbar>
          {!!completed && filterType !== 'active' && (
            <ClearCompletedButton onClick={handleClear}>
              Clear completed ({completed})
            </ClearCompletedButton>
          )}
        </Inner>
        {pages > 1 && (
          <PaginationWrapper>
            <Pagination
              count={pages}
              page={+page}
              color="primary"
              onChange={handlePage}
              showFirstButton
              showLastButton
            />
          </PaginationWrapper>
        )}
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
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
      0 6px 0 -3px rgba(255, 255, 255, 0.8), 0 7px 1px -3px rgba(0, 0, 0, 0.3),
      0 43px 0 -6px rgba(255, 255, 255, 0.8), 0 44px 2px -6px rgba(0, 0, 0, 0.2);
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

const MenuItem = styled.li<{ isActive: boolean; key: number }>`
  display: inline;
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
  ${({ isActive }) => isActive && 'font-weight: 700;'}
`

const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
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

const PaginationWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`

export default NavMenu
