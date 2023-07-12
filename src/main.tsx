import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ThemeContextProvider from "./store/theme-context.tsx";
import React from "react";
import AuthContextProvider from "./store/customer/auth-context.tsx";
import HomeServiceContextProvider from "./store/customer/home-context.tsx";
import AuthProContextProvider from "./store/pro/auth-pro-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <HomeServiceContextProvider>
      <AuthContextProvider>
        <AuthProContextProvider>
          <ThemeContextProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ThemeContextProvider>
        </AuthProContextProvider>
      </AuthContextProvider>
    </HomeServiceContextProvider>
  </Router>
);
