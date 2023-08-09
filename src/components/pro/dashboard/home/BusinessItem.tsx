import HomeCard from "./HomeCard";
import NoImage from "../../../../assets/no-photo.png";
import Edit from "../../../../assets/edit.svg";
import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import ProgressBar from "../../../UI/ProgressBar";
import { Service } from "../../../../models/home";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import EditBusinessModal from "../../../../layout/pro-models/EditBusinessLayout";

function BusinessItem(props: {
  id: number;
  image: any;
  title: string;
  subTitle: Service[];
  description: string;
  ratingCount: number;
  progress: string;
}) {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <HomeCard
      className="px-4 py-5 h-full"
      children={
        <div className="flex flex-col justify-between h-full">
          {openModal && (
            <EditBusinessModal
              onCancel={() => setOpenModal(false)}
              id={props.id}
            />
          )}
          <div>
            <div className="flex justify-between items-center">
              <NavLink
                to={`/pro/dashboard/dealer-detail/${props.id}`}
                key={props.id}
              >
                <div className="flex gap-2 items-center">
                  {props.image ? (
                    <img
                      src={`https://erranddo.kodecreators.com/storage/${props.image}`}
                      className="w-16 h-16 rounded-full object-cover dark:border-[0.5px] dark:border-white border-[0.5px] border-textColor"
                    />
                  ) : (
                    <img
                      src={NoImage}
                      className="h-16 w-16  rounded-full object-cover"
                    />
                  )}
                  <Heading
                    text={props.title}
                    variant="subTitle"
                    headingclassname="!font-bold mx-1 tracking-wide dark:text-white !break-word w-9/12"
                  />
                </div>
              </NavLink>
              <div
                onClick={() => setOpenModal(true)}
                className="dark:hover:bg-slate-700 hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full"
              >
                <img src={Edit} />
              </div>
            </div>
            <div className="flex  mt-5  mb-3 gap-1 break-words flex-wrap">
              {props?.subTitle?.map((item, index) => {
                return (
                  <div key={index}>
                    <Heading
                      text={
                        item.name.replace(".", "") +
                        (index !== props.subTitle.length - 1 ? " ," : "")
                      }
                      variant="subHeader"
                      headingclassname="!font-semibold uppercase !text-base text-slate-900 dark:text-slate-400  tracking-wide !leading-relaxed"
                    />
                  </div>
                );
              })}
              {props.subTitle.length === 0 && (
                <Heading
                  text={"No Services"}
                  variant="subHeader"
                  headingclassname="!font-semibold uppercase !text-base text-slate-900 dark:text-white  tracking-wide !leading-relaxed"
                />
              )}
            </div>

            <div
              className={`${
                !show
                  ? "xl:h-28 lg:h-24 xs:h-28"
                  : "xl:h-44 2xl:h-36 lg:h-36 md:h-44 xs:h-44"
              }`}
            >
              <Heading
                text={
                  !show ? props.description.slice(0, 100) : props.description
                }
                variant="subHeader"
                headingclassname={`!font-normal mt-2 !text-sm text-slate-600 dark:text-slate-400 tracking-wide !leading-relaxed text-justify break-words`}
              />
              {props?.description?.length > 100 ? (
                <div
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <Heading
                    text={
                      props.description.length > 100 && !show
                        ? "..show more"
                        : "..show less"
                    }
                    variant="subHeader"
                    headingclassname="!font-normal my-0   !text-sm text-primaryBlue dark:text-slate-400  tracking-wide !leading-relaxed"
                  />
                </div>
              ) : (
                <Heading
                  text={props.description.length > 150 ? "sv" : "xcdvb"}
                  variant="subHeader"
                  headingclassname="!font-normal  !text-sm text-transparent dark:text-slate-400  tracking-wide !leading-relaxed"
                />
              )}
            </div>
          </div>
          <div>
            <div className=" flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs dark:text-darktextColor">
              {Array.from({ length: props.ratingCount }, () => (
                <img src={GoldStar} />
              ))}
              {Array.from({ length: 5 - props.ratingCount }, () => (
                <img src={Star} />
              ))}
              <Heading
                text={`${props.ratingCount ?? 0} of 5 / 120`}
                variant="subHeader"
                headingclassname="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-slate-400"
              />
            </div>
            <div>
              <div className="flex justify-between my-5">
                <Heading
                  text={`Profile`}
                  variant="subHeader"
                  headingclassname="text-textColor !font-semibold tracking-wide text-xs  dark:text-white"
                />
                <Heading
                  text={props.progress}
                  variant="subHeader"
                  headingclassname={`${
                    +props.progress.split("%")[0] < 50
                      ? "text-red-600 dark:text-red-600"
                      : "text-primaryBlue "
                  }  !font-semibold tracking-wide !text-xs  `}
                />
              </div>
              <ProgressBar width={props.progress} key={props.id} />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default BusinessItem;
