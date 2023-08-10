import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import { NavLink } from "react-router-dom";
import LocationIcon from "../../../assets/LocationIcon";
import Outright from "../../../assets/outright.svg";
import Credit from "../../../assets/Credit.png";

import { useTheme } from "../../../store/theme-context";

function LeadsListItem(props: {
  id: number;
  time: any;
  title: string;
  business: string;
  service: string;
  answers: string[];
  location: string;
  mincredits: number;
  maxcredits: number;
}) {
  const { theme } = useTheme();

  return (
    <HomeCard className="px-3 pt-5 pb-3">
      <div className="flex w-full justify-between items-center">
        <NavLink
          className={"flex "}
          to={`/pro/leads/${props?.id}`}
          style={({ isActive }) =>
            isActive
              ? { color: "#DF994F" }
              : theme === "dark"
              ? { color: "#fff" }
              : { color: "#334155" }
          }
        >
          <Heading
            text={props.title}
            variant="subTitle"
            headingclassname="!font-bold capitalize !text-base mx-1 tracking-wide dark:text-white"
          />
        </NavLink>
        {/* <Heading
          text={`Posted ${props.time < 0 ? 0 : props.time} ago`}
          variant="subHeader"
          headingclassname="!font-medium !text-xs mx-1 text-primaryBlue tracking-wide dark:text-slate-400 break-keep"
        /> */}
        {new Date(props?.time).toISOString().split("T")[0] <
        new Date().toISOString().split("T")[0] ? (
          <Heading
            text={`Posted on ${props?.time.toDateString()}`}
            variant="subHeader"
            headingclassname="!font-medium !text-xs mx-1 text-primaryBlue tracking-wide dark:text-slate-400"
          />
        ) : (
          <Heading
            text={`Posted ${
              new Date().getHours() - new Date(props?.time).getHours()
            } hours ago`}
            variant="subHeader"
            headingclassname="!font-medium !text-xs mx-1 text-primaryBlue tracking-wide dark:text-slate-400"
          />
        )}
      </div>
      <div className="flex flex-col mt-3 gap-2">
        <div className="flex flex-wrap">
          <Heading
            text={`${props.business.replace(".", "")} - `}
            variant="smallTitle"
            headingclassname="!font-semibold !text-md tracking-wide "
          />
          <Heading
            text={`${props.service}`}
            variant="smallTitle"
            headingclassname="!font-semibold !text-md tracking-wide  ml-1"
          />
        </div>
        <div className="flex flex-wrap">
          {props.answers.map((item, key) => {
            return (
              <div className="flex">
                <Heading
                  text={`${item}`}
                  variant="smallTitle"
                  headingclassname="!font-light !text-xs   tracking-wide dark:text-slate-400 text-textColor"
                />
                {key !== props.answers.length - 1 && (
                  <Heading
                    text={`-`}
                    variant="smallTitle"
                    headingclassname="font-light !text-xs mx-2 tracking-wide dark:text-slate-400 text-textColor"
                  />
                )}
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
            headingclassname="!font-extralight text-slate-400 !text-xs  tracking-wide dark:text-white "
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 ">
            <div className="  w-5 h-5 mt-1 rounded-full">
              <img src={Outright} />
            </div>
            <Heading
              text={`Buy Outright`}
              variant="smallTitle"
              headingclassname="!font-semibold !text-xs   tracking-wide text-primaryGreen dark:text-primaryGreen"
            />
          </div>
          <div className="flex gap-1 ">
            <div className="  w-5 h-5  rounded-full">
              <img src={Credit} />
            </div>
            <Heading
              text={`${6} credits`}
              variant="smallTitle"
              headingclassname="!font-semibold !text-xs   tracking-wide dark:text-white text-textColor"
            />
          </div>
          <div className="flex gap-1 ">
            <div className="  w-5 h-5  rounded-full">
              <img src={Credit} />
            </div>
            <Heading
              text={`${3} credits`}
              variant="smallTitle"
              headingclassname="!font-semibold !text-xs   tracking-wide dark:text-white text-textColor"
            />
          </div>
        </div>
      </div>
    </HomeCard>
  );
}

export default LeadsListItem;
