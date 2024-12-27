import { useContext, useEffect, useState } from 'react';

import { TaskItem } from '../../components/Task/TaskItem';

import { TaskContext } from '../../contexts/TaskContext';

import {
  HistoryContainer,
  Table,
  TableHead,
  TableBody,
  CardContainer } from './styles';

export function History(){
  const { tasks } = useContext(TaskContext);
    const [isMobile, setIsMobile] = useState(false);

    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }

    useEffect(() => {
      checkDevice()
      window.addEventListener('resize', checkDevice)

      return () => { window.removeEventListener('resize', checkDevice) }
    }, []);


  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      {!isMobile && (
        <Table>
          <TableHead>
            <span>Tarefa</span>
            <span>Duração</span>
            <span>Início</span>
            <span>Status</span>
          </TableHead>

          <TableBody>
            {
              tasks.map(task => (
                <TaskItem
                  key={task.taskId}
                  title={task.task}
                  duration={task.time}
                  startAt={task.startAt.toISOString()}
                  status={task.endTime ? 'finished' : task.stopAt ? 'canceled' : 'current'}
                  isMobile={isMobile}
                />
              ))
            }
          </TableBody>
        </Table>
      )}

      {
        isMobile && (
          <CardContainer>
            {
              tasks.map(task => (
                <TaskItem
                  key={task.taskId}
                  title={task.task}
                  duration={task.time}
                  startAt={task.startAt.toISOString()}
                  status={task.endTime ? 'finished' : task.stopAt ? 'canceled' : 'current'}
                  isMobile={isMobile}
                />
              ))
            }
          </CardContainer>
        )
      }
    </HistoryContainer>
  )
}