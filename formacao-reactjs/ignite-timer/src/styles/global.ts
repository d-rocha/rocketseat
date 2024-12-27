import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  body {
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
 