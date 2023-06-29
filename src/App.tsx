import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<Services />}>
          <Route
            index
            element={<Navigate to="/services/service-detail" replace />}
          />
          <Route
            path="/services/service-detail"
            element={<ServiceDetail />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
