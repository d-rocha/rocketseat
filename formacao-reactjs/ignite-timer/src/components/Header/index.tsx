import { NavLink } from 'react-router-dom';
import { HeaderContainer, NavContainer } from './styles';

import logo from '../../assets/ignite-logo.svg';
import icTimer from '../../assets/ic-timer.svg';
import icHistory from '../../assets/ic-history.svg';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/' title='Logo'>
       <img src={logo} alt='Imagem de dois triângulos sobrepostos' />
      </NavLink>

      <NavContainer>
        <NavLink to='/' title='Timer'>
          <img src={icTimer} alt='Imagem de um relogio' />
        </NavLink>

        <NavLink to='/history'title='Histórico'>
          <img src={icHistory} alt='Imagem de um papel que simboliza registro' />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}