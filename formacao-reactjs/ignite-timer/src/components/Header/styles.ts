import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
      cursor: pointer;
    }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${props => props.theme['green-500']};
    }

    &.active {
      img {
        filter: ${props => props.theme['filter-green']};
      }
    }
  }
`;