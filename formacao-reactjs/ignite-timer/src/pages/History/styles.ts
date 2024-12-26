import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme["gray-100"]};
  }
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  height: 3.375rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${props => props.theme["gray-600"]};
  
  span {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-align: left;
    padding: 1rem;
    color: ${props => props.theme["gray-100"]};
    width: 25%;

    &:first-child {
      width: 50%;
      padding-left:1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`;

export const TableBody = styled.div`
  overflow: auto;
  height: 25rem;

  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme["green-500"]};
    border: none;
    border-radius: 12px;
  }
`;
