import NotificationContextProvider from "../../store/customer/notification-context";
import TopBar from "../customer/services/top-bar/TopBar";

import NotificationDetailPage from "./NotificationDetailPage";
import { Outlet } from "react-router";

function NotificationMainPage() {
  return (
    <NotificationContextProvider>
      <div>
        <TopBar />
        <div className="xl:mt-[8.651474530831099vh]  lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh] xl:px-36 lg:px-32 xs:px-5">
          <NotificationDetailPage />
          <Outlet />
        </div>
      </div>
    </NotificationContextProvider>
  );
}

export default NotificationMainPage;
