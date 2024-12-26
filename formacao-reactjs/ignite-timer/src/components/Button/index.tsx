import iconPlay from '../../assets/ic-play.svg';
import iconStop from '../../assets/ic-stop.svg';

import { ButtonStart, ButtonCancel } from './styles';

interface Props {
  state: boolean,
  isDisabled?: boolean,
  clickEvent?: () => void
}

export function Button({ state, isDisabled, clickEvent }: Props) {
  const label = !state ? 'Começar' : 'Interromper';

  const ContextButton = !state 
    ? <ButtonStart type='submit'disabled={isDisabled}>
        <img src={iconPlay} alt={label} />
        {label}
      </ButtonStart>

    : <ButtonCancel type='button' onClick={clickEvent}>
        <img src={iconStop} alt={label} />
        {label}
      </ButtonCancel>

  return ContextButton;
}