import { TaskItemContainer, TaskItemStatus } from "./styles";

interface Props {
  title?: string,
  duration?: string,
  startAt?: string,
  status: string
}

export function TaskItem({ title, duration, startAt, status }: Props) {
  const statusTask = {
    current: 'Em andamento',
    canceled: 'Interrompido',
    finished: 'Concluído'
  }

  return (
    <TaskItemContainer>
      <li>{title}</li>
      <li>{duration}</li>
      <li>{startAt}</li>
      <li>
        <TaskItemStatus color={status}>
          {statusTask[status]}
        </TaskItemStatus>
      </li>
    </TaskItemContainer>
  )
}