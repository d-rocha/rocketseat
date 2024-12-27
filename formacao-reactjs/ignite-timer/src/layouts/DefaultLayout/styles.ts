import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${props => props.theme['gray-800']};
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 8rem);
    margin: 5rem 1rem;
    padding: 1.5rem;
  }
`;