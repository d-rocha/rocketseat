import { createContext, useState } from 'react';

interface ITaskData {
  task: string,
  time: number
}

interface ITask {
  taskId: string,
  task: string,
  time: number,
  startAt: Date,
  stopAt?: Date,
  endTime?: Date
}

interface ITaskContext {
  tasks: ITask[],
  taskItemActive: ITask | undefined,
  taskItemActiveId: string | null,
  minutesAmount: number,
  startDate: Date | undefined,
  finishedTimeValidate: () => void,
  handleActionStop: () => void,
  handleCreateTask: (data: ITaskData) => void
}

export const TaskContext = createContext({} as ITaskContext);

interface IProps {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: IProps) {
  const [tasks, setTaskItem] = useState<ITask[]>([]);
  const [taskItemActiveId, setTaskItemActiveId] = useState<string | null>(null);

  const taskItemActive = tasks.find(item => item.taskId === taskItemActiveId);

  const handleCreateTask = (data: ITaskData) => {
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
  
  return (
    <TaskContext.Provider 
      value={{
        tasks,
        taskItemActive,
        taskItemActiveId,
        minutesAmount,
        startDate,
        finishedTimeValidate,
        handleActionStop,
        handleCreateTask
      }}>
      {children}
    </TaskContext.Provider>
  )
}