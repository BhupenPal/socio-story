import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/index.scss";
import theme from "./assets/material/theme";
import { ThemeProvider } from "@material-ui/core";
import Home from './screens/Home.jsx'

import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
