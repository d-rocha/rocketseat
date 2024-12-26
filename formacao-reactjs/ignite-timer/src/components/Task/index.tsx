import { createContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { NewTask } from './NewTask';
import { Countdown } from '../Countdown';

import { TaskContainer } from './styles';

export interface ITask {
  taskId: string,
  task: string,
  time: number,
  startAt: Date,
  stopAt?: Date,
  endTime?: Date
}

interface ITaskContext {
  taskItemActive: ITask | undefined,
  taskItemActiveId: string | null,
  minutesAmount: number,
  isSubmitDisabled: boolean | undefined,
  startDate: Date | undefined,
  finishedTimeValidate: () => void,
  handleActionStop: () => void
}

export const TaskContext = createContext({} as ITaskContext);

const formValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa'),
  time: zod.number()
  .min(1, 'O tempo mínimo precisa ser de 5 minutos')
  .max(60, 'O tempo máximo precisa ser de 60 minutos'),
})

type FormData = zod.infer<typeof formValidationSchema>

export function Task() {
  const [taskItem, setTaskItem] = useState<ITask[]>([]);
  const [taskItemActiveId, setTaskItemActiveId] = useState<string | null>(null);

  const taskItemActive = taskItem.find(item => item.taskId === taskItemActiveId);

  const newTaskItemForm = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      task: '',
      time: 0,
    }
  });

  const { handleSubmit, watch, reset } = newTaskItemForm;

  const handleActionSubmit = (data: FormData) => {
    const id = String(new Date().getTime());
    
    if(taskItemActive) return setTaskItemActiveId(null);

    const newTaskItem: ITask = {
      taskId: id,
      task: data.task,
      time: data.time,
      startAt: new Date()
    }

    setTaskItem((state) => [...state, newTaskItem]);
    setTaskItemActiveId(id);

    reset();
  }

  const handleActionStop = () => {
    setTaskItem((state) =>
      state.map(item => {
        if(item.taskId === taskItemActiveId) {
          return { ...item, stopAt: new Date() }
        } else {
          return item
        }}
      ),
    );
    setTaskItemActiveId(null);
  }

  const finishedTimeValidate = () => {
    setTaskItem((state) =>
      state.map(item => {
        if(item.taskId === taskItemActiveId) {
          return { ...item, endTime: new Date() }
        } else {
          return item
        }}
      ),
    );
    setTaskItemActiveId(null);
  }

  const minutesAmount = taskItemActive ? taskItemActive.time * 60 : 0;
  const startDate = taskItemActive ? taskItemActive.startAt : undefined;
  const isSubmitDisabled = !watch('task') && !taskItemActive;

  return (
    <TaskContext.Provider
      value={{
        taskItemActive,
        taskItemActiveId,
        minutesAmount,
        startDate,
        isSubmitDisabled,
        finishedTimeValidate,
        handleActionStop
      }}>
      <TaskContainer onSubmit={handleSubmit(handleActionSubmit)}>
        <FormProvider {...newTaskItemForm}>
          <NewTask/>
        </FormProvider>

        <Countdown />
      </TaskContainer>
    </TaskContext.Provider>
  )
}