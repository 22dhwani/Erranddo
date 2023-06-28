import { Outlet } from "react-router-dom";
import TopBar from "../components/services/top-bar/TopBar";

function Services() {
  return (
    <div>
      <TopBar />
      <div className=" mt-[9.651474530831099vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
