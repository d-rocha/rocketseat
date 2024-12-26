import { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { Countdown } from '../../Countdown';

import iconMinus from '../../../assets/ic-minus.svg';
import iconPlus from '../../../assets/ic-plus.svg';

import { 
  NewTaskContainer,
  HeaderTaskWrapper,
  ActionTimerWrapper } from "./styles";

const formValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa'),
  time: zod.number()
  .min(1, 'O tempo mínimo precisa ser de 5 minutos')
  .max(60, 'O tempo máximo precisa ser de 60 minutos'),
})

type FormData = zod.infer<typeof formValidationSchema>

interface ITask {
  taskId: string,
  task: string,
  time: number,
  startAt: Date,
  stopAt?: Date,
  endTime?: Date
}

interface ITasksContext {
  taskItemActive: ITask | undefined,
  taskItemActiveId: string | null,
  minutesAmount: number,
  isSubmitDisabled: boolean,
  startDate: Date | undefined,
  finishedTimeValidate: () => void,
  handleActionStop: () => void,
}

export const TasksContext = createContext({} as ITasksContext);

export function NewTask() {
  const [taskItem, setTaskItem] = useState<ITask[]>([]);
  const [taskItemActiveId, setTaskItemActiveId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      task: '',
      time: 0,
    }
  });

  const taskItemActive = taskItem.find(item => item.taskId === taskItemActiveId);

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
    <TasksContext.Provider
      value={{
        taskItemActive,
        taskItemActiveId,
        minutesAmount,
        startDate,
        isSubmitDisabled,
        finishedTimeValidate,
        handleActionStop
      }}>
      <NewTaskContainer onSubmit={handleSubmit(handleActionSubmit)}>
        <HeaderTaskWrapper>
          <label htmlFor="task">Vou trabalhar em</label>
          
          <input 
            id="task"
            placeholder="Dê um nome para seu projeto"
            list='task-suggestions'
            {...register('task')}
            disabled={!!taskItemActive}
          />

          <datalist id='task-suggestions'>
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Projeto 4"></option>
          </datalist>

          <label htmlFor="timer">durante</label>

          <ActionTimerWrapper>
            <button>
              <img src={iconMinus} alt="Sinal de menos" />
            </button>

            <input
              type="number"
              id="time"
              placeholder='00'
              // step={5}
              // min={5}
              max={60}
              {...register('time', { valueAsNumber: true })}
              disabled={!!taskItemActive}
            />

            <button>
              <img src={iconPlus} alt="Sinal de mais" />
            </button>
          </ActionTimerWrapper>

          <p>minutos.</p>
        </HeaderTaskWrapper>

        <Countdown />
      </NewTaskContainer>
    </TasksContext.Provider>
  )
}