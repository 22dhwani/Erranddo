import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ThemeContextProvider from "./store/theme-context.tsx";
import React from "react";
import AuthContextProvider from "./store/auth-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <AuthContextProvider>
      <ThemeContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeContextProvider>
    </AuthContextProvider>
  </Router>
);
