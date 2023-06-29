import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DealerDetail from "./pages/DealerDetail";
import Settings from "./pages/Settings";
import PersonalInfo from "./components/settings/PersonalInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<Settings />}>
          <Route
            index
            element={<Navigate to="/settings/personal-info" replace />}
          />
          <Route
            path="/settings/personal-info"
            element={<PersonalInfo />}
          ></Route>
        </Route>

        <Route path="/services" element={<Services />}>
          <Route
            index
            element={<Navigate to="/services/service-detail" replace />}
          />
          <Route
            path="/services/service-detail"
            element={<ServiceDetail />}
          ></Route>
          <Route
            path="/services/dealer-detail"
            element={<DealerDetail />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
