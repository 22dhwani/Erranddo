import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DealerDetail from "./pages/DealerDetail";
import Settings from "./pages/Settings";
import SignUpPage from "./pages/SignUpPage";
import PersonalInfo from "./components/settings/personal-info/PersonalInfo";
import ContactDetails from "./components/settings/contact-details/CotactDetails";
import ResetPassword from "./components/settings/reset-password/ResetPassword";
import Projects from "./pages/Projects";
import NotFoundOage from "./pages/NotFoundOage";
import SignInPage from "./pages/SignInPage";
import SignUpCustomer from "./pages/SignUpCustomer";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup-pro" element={<SignUpPage />} />
        <Route path="/signup-customer" element={<SignUpCustomer />} />

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/settings" element={<Settings />}>
          <Route
            index
            element={<Navigate to="/settings/personal-info" replace />}
          />
          <Route
            path="/settings/personal-info"
            element={<PersonalInfo />}
          ></Route>
          <Route
            path="/settings/contact-details"
            element={<ContactDetails />}
          ></Route>
          <Route
            path="/settings/reset-password"
            element={<ResetPassword />}
          ></Route>
        </Route>

        <Route path="/projects" element={<Projects />}></Route>
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
        <Route path="*" element={<NotFoundOage />} />
      </Routes>
    </div>
  );
}

export default App;
