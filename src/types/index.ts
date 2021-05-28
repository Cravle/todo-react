export enum TaskStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export type CountTasks = {
  active: number
  completed: number
}

export type Task = {
  text: string
  status: TaskStatus
  id: string
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
  tasks: Task[]
  count: number
}
