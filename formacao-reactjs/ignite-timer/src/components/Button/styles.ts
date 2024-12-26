import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  border-radius: 8px;
  border: 0;
  color: ${props => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ButtonStart = styled(ButtonBase)`
  background-color: ${props => props.theme["green-500"]};
    
  &:hover {
    background-color: ${props => props.theme["green-700"]};
  }
`;

export const ButtonCancel = styled(ButtonBase)`
  background-color: ${props => props.theme["red-500"]};
    
  &:hover {
    background-color: ${props => props.theme["red-700"]};
  }
`;