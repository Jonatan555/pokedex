import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/reset.ts";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { APPRoutes } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <APPRoutes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
