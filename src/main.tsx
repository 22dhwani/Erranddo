import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ThemeContextProvider from "./store/theme-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Router>
);
