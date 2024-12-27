import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  TaskItemContainer,
  TaskItemStatus,
  TaskItemCard,
  CardItem } from './styles';

interface Props {
  title: string,
  duration: number,
  startAt: string,
  status: string,
  isMobile: boolean
}

export function TaskItem({ title, duration, startAt, status, isMobile }: Props) {
  const statusTask = {
    current: 'Em andamento',
    canceled: 'Interrompido',
    finished: 'Concluído'
  }

  const TaskItemComponent = !isMobile
    ? <TaskItemContainer>
        <li>{title}</li>
        <li>{`${duration} minutos`}</li>
        <li>{formatDistanceToNow(startAt, { addSuffix: true, locale: ptBR })}</li>
        <li>
          <TaskItemStatus color={status}>
            {statusTask[status]}
          </TaskItemStatus>
        </li>
      </TaskItemContainer>

    : <TaskItemCard>
        <CardItem>
          <span>Tarefa:</span>
          <span>{title}</span>
        </CardItem>
        <CardItem>
          <span>Duração:</span>
          <span>{`${duration} minutos`}</span>
        </CardItem>
        <CardItem>
          <span>Início:</span>
          <span>
            {formatDistanceToNow(startAt, { addSuffix: true, locale: ptBR })}
          </span>
        </CardItem>
        <CardItem>
          <span>Status:</span>
          <TaskItemStatus color={status}>
            {statusTask[status]}
          </TaskItemStatus>
        </CardItem>
      </TaskItemCard>

  return TaskItemComponent;
}