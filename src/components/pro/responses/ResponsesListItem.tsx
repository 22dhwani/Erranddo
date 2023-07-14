import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import { NavLink } from "react-router-dom";
import LocationIcon from "../../../assets/LocationIcon";
import Outright from "../../../assets/outright.svg";
import Credit from "../../../assets/Credit.svg";

import { useTheme } from "../../../store/theme-context";

function ResponsesListItem(props: {
  time: any;
  title: string;
  subTitle: string[];
  answers: string[];
  location: string;
}) {
  const { theme } = useTheme();

  return (
    <HomeCard className="px-3 pt-5 pb-3">
      <div className="flex w-full justify-between items-center">
        <Heading
          text={props.title}
          variant="subTitle"
          headingclassName="!font-bold  !text-base mx-1 tracking-wide dark:text-white"
        />
        <Heading
          text={`Purchased ${props.time} ago`}
          variant="subHeader"
          headingclassName="!font-medium !text-xs mx-1 text-primaryBlue tracking-wide dark:text-white"
        />
      </div>
      <div className="flex flex-col mt-3 gap-2">
        <div className="flex flex-wrap">
          {props.subTitle.map((item) => {
            return (
              <NavLink
                className={"flex "}
                to={`/pro/leads/${item}`}
                style={({ isActive }) =>
                  isActive ? { color: "#DF994F" } : { color: "#334155" }
                }
              >
                <Heading
                  text={`${item}`}
                  variant="smallTitle"
                  headingclassName="!font-semibold !text-md tracking-wide dark:text-white "
                />
                <Heading
                  text={`|`}
                  variant="smallTitle"
                  headingclassName="font-light !text-md mx-2 tracking-wide dark:text-white "
                />
              </NavLink>
            );
          })}
        </div>
        <div className="flex flex-wrap">
          {props.answers.map((item) => {
            return (
              <div className="flex">
                <Heading
                  text={`${item}`}
                  variant="smallTitle"
                  headingclassName="!font-light !text-xs   tracking-wide dark:text-white text-textColor"
                />
                <Heading
                  text={`-`}
                  variant="smallTitle"
                  headingclassName="font-light !text-xs mx-2 tracking-wide dark:text-white text-textColor"
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center my-1 gap-2">
          {theme === "light" && (
            <div children={<LocationIcon color="black" />} />
          )}

          {theme === "dark" && (
            <div children={<LocationIcon color="white" />} />
          )}
          <Heading
            text={`${props.location}`}
            variant="smallTitle"
            headingclassName="!font-extralight text-slate-400 !text-xs  tracking-wide dark:text-white "
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 ">
            <div className="  w-5 h-5 mt-1 rounded-full">
              <img src={Outright} />
            </div>
            <Heading
              text={`Bought Outright`}
              variant="smallTitle"
              headingclassName="!font-semibold !text-xs   tracking-wide text-primaryGreen dark:text-primaryGreen"
            />
          </div>
        </div>
      </div>
    </HomeCard>
  );
}

export default ResponsesListItem;
