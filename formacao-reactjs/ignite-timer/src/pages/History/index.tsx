import { useContext } from "react";

import { TaskItem } from "../../components/Task/TaskItem";

import { TaskContext } from "../../contexts/TaskContext";

import { HistoryContainer, Table, TableHead, TableBody } from "./styles";

export function History(){
  const { tasks } = useContext(TaskContext);

  console.log('>>> tasks', tasks)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

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
                status={task.endTime ? "finished" : task.stopAt ? "canceled" : "current"}
              />
            ))
          }
        </TableBody>
      </Table>
    </HistoryContainer>
  )
}