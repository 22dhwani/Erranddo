import { Outlet } from "react-router";
import SideBar from "../../components/pro/dashboard/side-bar/SideBar";
import TopBar from "../../components/pro/dashboard/top-bar/TopBar";
import MobileSideBar from "../../components/pro/dashboard/mobile-sidebar/MobileSideBar";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
