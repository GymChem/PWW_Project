import { HashRouter } from "react-router-dom";
import MainLayout from "./UI/MainLayout";
import React from "react";
import "./App.css";
import {
  createTheme,
  CssBaseline,
  darkScrollbar,
  ThemeProvider,
} from "@mui/material";

function App() {
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {},
      components: {
        MuiCssBaseline: {},
      },
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
