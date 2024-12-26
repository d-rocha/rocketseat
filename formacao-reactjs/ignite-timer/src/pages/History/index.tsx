import { TaskItem } from "../../components/Task/TaskItem";
import { HistoryContainer, Table, TableHead, TableBody } from "./styles";

export function History(){
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
          <TaskItem
            title="Consertos de debitos tecnicos"
            duration="25 minutos"
            startAt="Ha cerca de 2 meses"
            status="current"
          />

          <TaskItem
            title="Consertos de debitos tecnicos"
            duration="25 minutos"
            startAt="Ha cerca de 2 meses"
            status="canceled"
          />

          <TaskItem
            title="Consertos de debitos tecnicos"
            duration="25 minutos"
            startAt="Ha cerca de 2 meses"
            status="finished"
          />
        </TableBody>
      </Table>
    </HistoryContainer>
  )
}