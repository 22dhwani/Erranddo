import SideNavBarItem from "./SideBarItem";
import Home from "../../../../assets/Home.tsx";
import Filter from "../../../../assets/Filter.tsx";
import Response from "../../../../assets/Resolve.tsx";
import Settings from "../../../../assets/Settings.tsx";
import { useLocation } from "react-router";
import Question from "../../../../assets/Question.tsx";

function SideBar() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div
      className={`
        lg:w-60 fixed left-0   bg-white xl:top-[8.651474530831099vh]  lg:top-[9.651474530831099vh]   z-40 lg:flex xs:hidden shadow-lg h-full px-3  flex-col justify-between`}
    >
      <div>
        <SideNavBarItem
          link="/pro/dashboard"
          text="Dashboard"
          img={
            <Home
              color={`${location === "/pro/dashboard" ? "white" : "black"}`}
            />
          }
        />
        <SideNavBarItem
          link="/pro/leads"
          text="Leads"
          isNumber={true}
          number={99}
          img={
            <Filter
              color={`${location === "/pro/leads" ? "white" : "black"}`}
            />
          }
        />
        <SideNavBarItem
          link="/pro/responses"
          text="Response"
          isNumber={true}
          number={99}
          img={
            <Response
              color={`${location === "/pro/responses" ? "white" : "black"}`}
            />
          }
        />
        <SideNavBarItem
          link="/pro/settings"
          text="Settings"
          isNumber={true}
          img={
            <Settings
              color={`${location === "/pro/settings" ? "white" : "black"}`}
            />
          }
        />
      </div>
      <div className="mt-auto mb-16">
        <SideNavBarItem
          link="/pro/help"
          text="Help"
          isNumber={true}
          img={
            <Question
              color={`${location === "/pro/help" ? "white" : "black"}`}
            />
          }
        />
      </div>
    </div>
  );
}

export default SideBar;
