import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import { NavLink } from "react-router-dom";
import LocationIcon from "../../../assets/LocationIcon";
import Outright from "../../../assets/outright.svg";
import Credit from "../../../assets/Credit.png";

import { useTheme } from "../../../store/theme-context";
import Dustbin from "../../../assets/Dustbin";
import DeleteLeadModal from "../../../layout/pro-models/DeleteLeadModal";
import { useState } from "react";
import dayjs from "dayjs";

function getTimeDifferenceString(time: any) {
  const currentTime = dayjs();
  const postTime = dayjs(time);

  const diffInMinutes = currentTime.diff(postTime, "minute");
  const diffInHours = currentTime.diff(postTime, "hour");
  const diffInDays = currentTime.diff(postTime, "day");

  if (diffInMinutes < 1) {
    return "Posted less than a minute ago";
  } else if (diffInMinutes < 60) {
    return `Posted ${diffInMinutes} minute${
      diffInMinutes === 1 ? "" : "s"
    } ago`;
  } else if (diffInHours < 24) {
    return `Posted ${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  } else {
    return `Posted ${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  }
}

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
  leads_count: number;
  quoteRequested: boolean;
  interested: boolean;
}) {
  const { theme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  const timeDifferenceString = getTimeDifferenceString(props?.time);

  return (
    <HomeCard className="px-3 pt-5 pb-3">
      {openMenu && (
        <DeleteLeadModal
          onCancel={() => {
            setOpenMenu(false);
          }}
          id={props?.id}
        />
      )}
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
        <div className="flex items-center gap-4">
          {/* {new Date(props?.time).toISOString().split("T")[0] <
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
          )} */}
          <Heading
            text={timeDifferenceString}
            variant="subHeader"
            headingclassname="!font-medium !text-xs mx-1 text-primaryBlue tracking-wide dark:text-slate-400"
          />
          <button onClick={() => setOpenMenu(!openMenu)}>
            {theme === "light" && <Dustbin color="black" />}

            {theme === "dark" && <Dustbin color="white" />}
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-3 gap-2">
        <div className="flex flex-wrap">
          <Heading
            text={`${props.business.replace(".", "")} - `}
            variant="smallTitle"
            headingclassname="!font-semibold !text-md tracking-wide mr-1"
          />
          <Heading
            text={` ${props.service}`}
            variant="smallTitle"
            headingclassname="!font-semibold !text-md tracking-wide  "
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
        <div className="flex justify-between w-full items-center ">
          <div className="flex gap-2 ">
            <div className="  w-5 h-5 mt-1 rounded-full">
              <img src={Outright} />
            </div>
            <Heading
              text={
                props?.leads_count === 4
                  ? "Sold out"
                  : props.leads_count > 0
                  ? "Buy Lead"
                  : `Buy Outright`
              }
              variant="smallTitle"
              headingclassname="!font-semibold !text-xs   tracking-wide text-primaryGreen dark:text-primaryGreen"
            />
            {props.leads_count < 4 && (
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
            )}
          </div>

          {props.leads_count < 4 && (
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
          )}
        </div>
      </div>
      <div className="flex">
        {/* {props.quoteRequested && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 text-transparent rounded-full"></div>
                <Heading
                  text={`Sent you a message`}
                  variant="smallTitle"
                  headingclassname="!font-semibold !text-xs tracking-wide dark:text-green-500 text-green-500 py-2 rounded-lg"
                />
              </div>
            )} */}
        {props.quoteRequested && (
          <div className="w-full  text-transparent  border-t-[0.5px] border-t-slate-200 mt-2 flex items-center gap-5 justify-start">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 text-transparent rounded-full"></div>
              <Heading
                text={`Requested quote`}
                variant="smallTitle"
                headingclassname="!font-semibold !text-xs tracking-wide dark:text-green-500 text-green-500 py-2 rounded-lg"
              />
            </div>
          </div>
        )}
        {props.interested && (
          <div className="w-full  text-transparent  border-t-[0.5px] border-t-slate-200 mt-2 flex items-center gap-5 justify-end">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 text-transparent rounded-full"></div>
              <Heading
                text={`Interest shown`}
                variant="smallTitle"
                headingclassname="!font-semibold !text-xs tracking-wide dark:text-green-500 text-green-500 py-2 rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      {/* {props.interested && (
          <div className="w-full  text-transparent  border-t-[0.5px] border-t-slate-200 mt-2 flex items-center gap-1 justify-end ">
            <div className="w-2 h-2 bg-green-500 text-transparent rounded-full"></div>
            <Heading
              text={`Interest shown`}
              variant="smallTitle"
              headingclassname="!font-semibold !text-xs   tracking-wide dark:text-green-500 text-green-500 py-2 rounded-lg "
            />
          </div>
        )} */}
    </HomeCard>
  );
}

export default LeadsListItem;
