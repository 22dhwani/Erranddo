import { NavLink } from "react-router-dom";
import Heading from "../UI/Heading";

function SettingsLink() {
  return (
    <div className="flex items-center justify-center w-4/6  py-10">
      <NavLink
        className="hover:text-primaryBlue"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#0003FF",
                borderBottom: "3px #0003FF  solid",
              }
            : {}
        }
        to="/settings/personal-info"
      >
        <Heading
          text={"Personal Info"}
          variant="subHeader"
          headingclassName="text-textColor !font-semibold tracking-wide !text-2xl dark:text-slate-400"
        />
      </NavLink>
    </div>
  );
}

export default SettingsLink;
