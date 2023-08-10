import { Outlet } from "react-router";
import SideBar from "../../components/pro/dashboard/side-bar/SideBar";
import TopBar from "../../components/pro/dashboard/top-bar/TopBar";
import MobileSideBar from "../../components/pro/dashboard/mobile-sidebar/MobileSideBar";
import BusinessContextProvider from "../../store/pro/dashboard-context";
import ServiceContextProvider from "../../store/pro/service-context";
import ReviewContextProProvider from "../../store/pro/review-context";

function Dashboard() {
  return (
    <ServiceContextProvider>
      <BusinessContextProvider>
        <ReviewContextProProvider>
          <div className="overflow-x-hidden">
            <div>
              <TopBar />
              <div className="h-screen flex flex-row w-screen">
                <SideBar />
                <Outlet />
              </div>
              <MobileSideBar />
            </div>
          </div>
        </ReviewContextProProvider>
      </BusinessContextProvider>
    </ServiceContextProvider>
  );
}

export default Dashboard;
