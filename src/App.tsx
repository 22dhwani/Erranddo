import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/customer/HomePage";
import Services from "./pages/customer/Services";
import ServiceDetail from "./pages/customer/ServiceDetail";
import DealerDetail from "./pages/customer/DealerDetail";
import Settings from "./pages/customer/Settings";
import SignUpPage from "./pages/customer/SignUpPage";
import PersonalInfo from "./components/customer/settings/personal-info/PersonalInfo";
import ContactDetails from "./components/customer/settings/contact-details/CotactDetails";
import ResetPassword from "./components/customer/settings/reset-password/ResetPassword";
import Projects from "./pages/customer/Projects";
import NotFoundOage from "./pages/customer/NotFoundOage";
import SignInPage from "./pages/customer/SignInPage";
import SignUpCustomer from "./pages/customer/SignUpCustomer";
import Dashboard from "./pages/pro/Dashboard";
import Home from "./pages/pro/Home";
import Notification from "./pages/customer/Notification";
import NotificationContent from "./components/notifications/NotificationContent";
import NotificationSettingDetailSection from "./components/notifications/NotificationSettingDetailSection";
import { useAuth } from "./store/auth-context";
import HomeServiceContextProvider from "./store/home-context";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <HomeServiceContextProvider>
      <div>
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup-pro" element={<SignUpPage />} />
          <Route path="/signup-customer" element={<SignUpCustomer />} />
          <Route path="/sign-in" element={<SignInPage />} />
          {isLoggedIn && (
            <Route>
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
            </Route>
          )}

          <Route path="/pro" element={<Dashboard />}>
            <Route index element={<Navigate to="/pro/dashboard" replace />} />
            <Route path="/pro/dashboard" element={<Home />}></Route>
          </Route>

          <Route path="/notifications" element={<Notification />}>
            <Route
              index
              element={<Navigate to="/notifications/detail" replace />}
            />
            <Route
              path="/notifications/detail"
              element={<NotificationContent />}
            ></Route>
          </Route>
          <Route path="/pro-dashboard" element={<DealerDetail />} />
          <Route path="*" element={<NotFoundOage />} />
        </Routes>
      </div>
    </HomeServiceContextProvider>
  );
}

export default App;
