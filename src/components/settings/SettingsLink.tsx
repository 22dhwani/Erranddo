import { NavLink } from "react-router-dom";
import Heading from "../UI/Heading";

function SettingsLink() {
  return (
    <div className="w-full items-center flex justify-center">
      <div className=" grid grid-cols-3 py-10 xs:w-full lg:w-3/5  xs:gap-2 lg:gap-0">
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit "
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
              headingclassName=" !font-semibold tracking-wide md:text-xl  xs:text-xs dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit md:mx-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/settings/contact-details"
          >
            <Heading
              text={"Contact Details"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-xl  xs:text-xs dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit  ml-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/settings/reset-password"
          >
            <Heading
              text={"Reset Password"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-xl  xs:text-xs dark:text-white"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SettingsLink;
