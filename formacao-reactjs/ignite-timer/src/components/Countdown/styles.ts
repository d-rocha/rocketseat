import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const TimerWrapper = styled.div`
  display: flex;
`;

export const Timer = styled.div`
  display: flex;
  gap: 1rem;

  span {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 10rem;
    background-color: ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-100']};
    border-radius: 8px;
    padding: 0 16px;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export const SplitTimer = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  color: ${props => props.theme['green-500']};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;