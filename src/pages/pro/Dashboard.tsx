import { Outlet } from "react-router";
import SideBar from "../../components/pro/dashboard/side-bar/SideBar";
import TopBar from "../../components/pro/dashboard/top-bar/TopBar";
import MobileSideBar from "../../components/pro/dashboard/mobile-sidebar/MobileSideBar";
import BusinessContextProvider from "../../store/pro/dashboard-context";

function Dashboard() {
  return (
    <BusinessContextProvider>
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
    </BusinessContextProvider>
  );
}

export default Dashboard;
