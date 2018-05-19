import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css.js";

const theme = {
  primary: {
    main: '#442254',
    light: '#714b81'
  },
  secondary: {
    main: '#FFFFFF',
    dark: '#CCCCCC'
  },
  spacing: '1rem'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
