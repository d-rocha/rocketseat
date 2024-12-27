import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { TaskContext } from '../../../contexts/TaskContext';

import iconMinus from '../../../assets/ic-minus.svg';
import iconPlus from '../../../assets/ic-plus.svg';

import { 
  NewTaskContainer,
  HeaderTaskWrapper,
  ActionTimerWrapper } from './styles';

export function NewTask() {
  const { taskItemActive } = useContext(TaskContext);
  const { register } = useFormContext();

  return (
    <NewTaskContainer>
      <HeaderTaskWrapper>
        <label htmlFor='task'>Vou trabalhar em</label>

        <input
          id='task'
          placeholder='Dê um nome para seu projeto'
          list='task-suggestions'
          {...register('task')}
          disabled={!!taskItemActive}
        />

        <datalist id='task-suggestions'>
          <option value='Projeto 1'></option>
          <option value='Projeto 2'></option>
          <option value='Projeto 3'></option>
          <option value='Projeto 4'></option>
        </datalist>

        <label htmlFor='timer'>durante</label>

        <ActionTimerWrapper>
          <button>
            <img src={iconMinus} alt='Sinal de menos' />
          </button>

          <input
            type='number'
            id='time'
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register('time', { valueAsNumber: true })}
            disabled={!!taskItemActive}
          />

          <button>
            <img src={iconPlus} alt='Sinal de mais' />
          </button>
        </ActionTimerWrapper>

        <p>minutos.</p>
      </HeaderTaskWrapper>
    </NewTaskContainer>
  )
}