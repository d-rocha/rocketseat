import { useContext } from 'react';
import iconPlay from '../../assets/ic-play.svg';
import iconStop from '../../assets/ic-stop.svg';

import { TaskContext } from '../../contexts/TaskContext';

import { ButtonStart, ButtonCancel } from './styles';

interface IProps {
  isSubmitDisabled: boolean,
}

export function Button({ isSubmitDisabled }: IProps) {
  const { taskItemActive, handleActionStop } = useContext(TaskContext);

  const label = !taskItemActive ? 'Começar' : 'Interromper';

  const ContextButton = !taskItemActive 
    ? <ButtonStart type='submit'disabled={isSubmitDisabled}>
        <img src={iconPlay} alt={label} />
        {label}
      </ButtonStart>

    : <ButtonCancel type='button' onClick={handleActionStop}>
        <img src={iconStop} alt={label} />
        {label}
      </ButtonCancel>

  return ContextButton;
}