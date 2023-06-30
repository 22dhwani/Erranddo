import { Outlet } from "react-router-dom";
import TopBar from "../components/services/top-bar/TopBar";

function Services() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <div className="xl:h-[7.651474530831099vh] lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
