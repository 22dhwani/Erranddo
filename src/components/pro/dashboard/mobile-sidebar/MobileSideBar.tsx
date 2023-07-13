import Filter from "../../../../assets/Filter.tsx";
import Response from "../../../../assets/Resolve.tsx";
import Settings from "../../../../assets/Settings.tsx";
import Home from "../../../../assets/Home";
import { useLocation } from "react-router-dom";
import MobileSideBarItem from "./MobileSideBarItem.tsx";
import Question from "../../../../assets/Question.tsx";
import { useTheme } from "../../../../store/theme-context.tsx";

function MobileSideBar() {
  const location = useLocation().pathname;
  const { theme } = useTheme();
  return (
    <div className="lg:hidden xs:flex fixed bottom-0 py-3 bg-gray-100 dark:bg-[#141625] w-screen shadow-lg xs:justify-between items-center">
      <MobileSideBarItem
        link="/pro/dashboard"
        img={
          theme === "light" ? (
            <Home
              color={`${location === "/pro/dashboard" ? "#0033FF" : "black"}`}
            />
          ) : (
            <Home
              color={`${location === "/pro/dashboard" ? "#0033FF" : "#DF994F"}`}
            />
          )
        }
      />
      <MobileSideBarItem
        link="/pro/leads"
        img={
          theme === "light" ? (
            <Filter
              color={`${
                location.startsWith("/pro/leads") ? "#0033FF" : "black"
              }`}
            />
          ) : (
            <Filter
              color={`${location === "/pro/leads" ? "#0033FF" : "#DF994F"}`}
            />
          )
        }
      />
      <MobileSideBarItem
        link="/pro/response"
        img={
          theme === "light" ? (
            <Response
              color={`${location === "/pro/responses" ? "#0033FF" : "black"}`}
            />
          ) : (
            <Response
              color={`${location === "/pro/responses" ? "#0033FF" : "#DF994F"}`}
            />
          )
        }
      />

      <MobileSideBarItem
        link="/pro/settings"
        img={
          theme === "light" ? (
            <Settings
              color={`${location === "/pro/settings" ? "#0033FF" : "black"}`}
            />
          ) : (
            <Settings
              color={`${location === "/pro/settings" ? "#0033FF" : "#DF994F"}`}
            />
          )
        }
      />
      <MobileSideBarItem
        link="/pro/help"
        img={
          theme === "light" ? (
            <Question
              color={`${location === "/pro/help" ? "#0033FF" : "black"}`}
            />
          ) : (
            <Question
              color={`${location === "/pro/help" ? "#0033FF" : "#DF994F"}`}
            />
          )
        }
      />
    </div>
  );
}

export default MobileSideBar;
