import { NavLink } from "react-router-dom";
import Heading from "../../UI/Heading";

function SettingsNavLinkPro() {
  return (
    <div className="w-full flex justify-between">
      <div className="  grid grid-cols-6 md:py-3 xs:py-5 xs:w-full xs:gap-3 lg:gap-0 px-5">
        <div className="w-full">
          <NavLink
            className="hover:text-primaryBlue  flex w-fit "
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/pro/settings/personal-info"
          >
            <Heading
              text={"Personal Info"}
              variant="subHeader"
              headingclassName=" !font-semibold tracking-wide md:text-base  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit mx-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/pro/settings/contact-details"
          >
            <Heading
              text={"Contact Details"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-base  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit mx-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/pro/settings/password"
          >
            <Heading
              text={"Password"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-base  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit ml-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/pro/settings/payment-details"
          >
            <Heading
              text={"Payment Details"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-base  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit ml-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/pro/settings/credits"
          >
            <Heading
              text={"Credits"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-base  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full">
          <NavLink
            className="hover:text-primaryBlue flex w-fit  ml-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/pro/settings/invoices"
          >
            <Heading
              text={"Invoices"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-base  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SettingsNavLinkPro;
