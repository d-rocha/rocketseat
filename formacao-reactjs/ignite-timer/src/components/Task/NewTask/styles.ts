import styled from "styled-components";

export const NewTaskContainer = styled.div`
  label, input, p {
    color: ${props => props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
  }

  input {
    width: 17rem;
    height: 2.5rem;
    border: 0;
    background-color: transparent;
    color: ${props => props.theme["gray-500"]};
    border-bottom: 2px solid ${props => props.theme["gray-500"]};
    text-align: center;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }
`;

export const HeaderTaskWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

export const ActionTimerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};

  input {
    width: 3rem;
    border: 0;
  }
`;