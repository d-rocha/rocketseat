import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { TaskContextProvider } from "./contexts/TaskContext";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <GlobalStyle />
        <TaskContextProvider>
          <Router />
        </TaskContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
