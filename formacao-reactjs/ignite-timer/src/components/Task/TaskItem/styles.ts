import styled from 'styled-components';

export const TaskItemContainer = styled.ul`
  display: flex;
  align-items: center;
  height: 3.375rem;
  border-top: 4px solid ${props => props.theme['gray-800']};
  padding-left: 1rem;
  background-color: ${props => props.theme['gray-700']};

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  li {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    padding: 1rem;
    color: ${props => props.theme['gray-300']};
    width: 25.7%;

    &:first-child {
      width: 50%;
      padding-left: 0.1rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`;

const STATUS_COLORS = {
  current: 'yellow-500',
  canceled: 'red-500',
  finished: 'green-100',
} as const

interface StatusProps {
  color: keyof typeof STATUS_COLORS
}

export const TaskItemStatus = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;

    background-color: ${props => props.theme[STATUS_COLORS[props.color]]};
    border-radius: 100%;
  }
`;

export const TaskItemCard = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid ${props => props.theme['green-300']};
  border-radius: 8px;
  padding: 10px;
`;

export const CardItem = styled.li`
  display: flex;
  justify-content: space-between;

  span {
    &:first-child {
      font-weight: 700;
    }
  }
`;