import { Outlet } from "react-router-dom";
import TopBar from "../components/services/top-bar/TopBar";
import SettingsLink from "../components/settings/SettingsLink";

function Settings() {
  return (
    <div className="overflow-x-hidden">
      <TopBar isSettingDisabled={true} />

      <div className=" lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh]">
        <SettingsLink />
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
