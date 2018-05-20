import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css.js";

const theme = {
  primary: {
    dark: "#442254",
    main: "#714b81",
    light: "#9e6fba"
  },
  secondary: {
    main: "#FFFFFF",
    dark: "#CCCCCC"
  },
  spacing: "1rem",
  gradient:
    "linear-gradient(90deg, rgba(68,34,84,1) 0%, rgba(132,77,143,1) 100%)",
  shadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
  shadowDark: "0 4px 8px 0 rgba(0, 0, 0, 0.6)"
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
