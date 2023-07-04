import Filter from "../../../../assets/Filter.tsx";
import Response from "../../../../assets/Resolve.tsx";
import Settings from "../../../../assets/Settings.tsx";
import Home from "../../../../assets/Home";
import { useLocation } from "react-router-dom";
import MobileSideBarItem from "./MobileSideBarItem.tsx";
import Question from "../../../../assets/Question.tsx";

function MobileSideBar() {
  const location = useLocation().pathname;
  return (
    <div className="lg:hidden xs:flex fixed bottom-0 py-3 bg-gray-100 w-screen shadow-lg xs:justify-between items-center">
      <MobileSideBarItem
        link="/pro/dashboard"
        img={
          <Home
            color={`${location === "/pro/dashboard" ? "#0033ff" : "black"}`}
          />
        }
      />
      <MobileSideBarItem
        link="/pro/leads"
        img={
          <Filter
            color={`${location === "/pro/leads" ? "#0033ff" : "black"}`}
          />
        }
      />
      <MobileSideBarItem
        link="/pro/response"
        img={
          <Response
            color={`${location === "/pro/response" ? "#0033ff" : "black"}`}
          />
        }
      />

      <MobileSideBarItem
        link="/pro/settings"
        img={
          <Settings
            color={`${location === "/pro/settings" ? "#0033ff" : "black"}`}
          />
        }
      />
      <MobileSideBarItem
        link="/pro/help"
        img={
          <Question
            color={`${location === "/pro/help" ? "#0033ff" : "black"}`}
          />
        }
      />
    </div>
  );
}

export default MobileSideBar;
