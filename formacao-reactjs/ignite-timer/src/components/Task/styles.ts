import styled from 'styled-components';

export const TaskContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.5rem;

  @media screen and (max-width: 768px) {
    /* gap: 1rem; */
  }
`;