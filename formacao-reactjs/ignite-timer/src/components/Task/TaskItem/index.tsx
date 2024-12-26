import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { TaskItemContainer, TaskItemStatus } from './styles';

interface Props {
  title: string,
  duration: number,
  startAt: string,
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
      <li>{`${duration} minutos`}</li>
      <li>{formatDistanceToNow(startAt, { addSuffix: true, locale: ptBR })}</li>
      <li>
        <TaskItemStatus color={status}>
          {statusTask[status]}
        </TaskItemStatus>
      </li>
    </TaskItemContainer>
  )
}