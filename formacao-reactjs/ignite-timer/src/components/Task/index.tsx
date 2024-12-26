import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { NewTask } from './NewTask';
import { Countdown } from '../Countdown';
import { TaskContext } from '../../contexts/TaskContext';

import { TaskContainer } from './styles';

const formValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa'),
  time: zod.number()
  .min(1, 'O tempo mínimo precisa ser de 5 minutos')
  .max(60, 'O tempo máximo precisa ser de 60 minutos'),
})

type FormData = zod.infer<typeof formValidationSchema>

export function Task() {
  const newTaskItemForm = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      task: '',
      time: 0,
    }
  });

  const { taskItemActive, handleCreateTask } = useContext(TaskContext);

  const { handleSubmit, watch, reset } = newTaskItemForm;

  const handleActionSumit = (data: FormData) => {
    handleCreateTask(data);
    reset();
  }

  const isSubmitDisabled = !watch('task') && !taskItemActive;

  return (
    <TaskContainer onSubmit={handleSubmit(handleActionSumit)}>
      <FormProvider {...newTaskItemForm}>
        <NewTask/>
      </FormProvider>

      <Countdown isSubmitDisabled={isSubmitDisabled} />
    </TaskContainer>
  )
}