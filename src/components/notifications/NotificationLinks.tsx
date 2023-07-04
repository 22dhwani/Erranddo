import { NavLink } from "react-router-dom";
import Heading from "../UI/Heading";

function NotificationLinks() {
  return (
    <div className="w-full items-center flex justify-center">
      <div className=" grid grid-cols-2 md:py-10 xs:py-5 xs:w-full md:w-5/6 lg:w-1/2  xs:gap-2 lg:gap-0">
        <div className="w-full">
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
            to="/notifications/detail"
          >
            <Heading
              text={"Notification"}
              variant="subHeader"
              headingclassName=" !font-semibold tracking-wide md:text-xl  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full">
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
            to="/"
          >
            <Heading
              text={"Notification Setting"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-xl  xs:text-xs sm:text-sm dark:text-white"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NotificationLinks;
