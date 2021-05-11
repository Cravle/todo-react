export enum TaskStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export type TaskDb = {
  status: TaskStatus
  text: string
  id: string
}

export type CountTasks = {
  active: number
  completed: number
}

export type Task = {
  text: string
  status: TaskStatus
  id: string
  isEdit: boolean
}

export type CountTaskByStatus = {
  activeTask: number
  completedTask: number
}

export type User = {
  email: string
  password: string
}

export type TaskResponse = {
  tasks: TaskDb[]
  count: CountTasks
}
