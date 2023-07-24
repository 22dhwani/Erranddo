import Heading from "../../../../UI/Heading";
import GoldStar from "../../../../../assets/GoldStar.svg";
import Star from "../../../../../assets/Star.svg";
import Button from "../../../../UI/Button";

import { useTheme } from "../../../../../store/theme-context";
import editicon from "../../../../../assets/edit-2-svgrepo-com.svg";
import HomeCard from "../../home/HomeCard";
import DealerDetailSkeleton from "../../../skeleton/Dealer/DealerDetailSkeleton";
import { Service } from "../../../../../models/home";
import { useState } from "react";
import EditNameDescriptionModal from "../../../../../layout/pro-models/EditNameDescriptionModalt";

function DealerDetailSection(props: {
  icon: any;
  title: string;
  services: Service[];
  description: string;
  year: any;
  ratingCount: number;
}) {
  const isLoading = false;
  const [show, setShow] = useState(false);

  return (
    <div>
      {isLoading ? (
        <DealerDetailSkeleton />
      ) : (
        <HomeCard>
          {show && <EditNameDescriptionModal onCancel={() => setShow(false)} />}
          <div className="border-b-slate-300 lg:py-7 xs:py-5 my-4 px-5 items-center">
            <div className="rounded-full float-left lg:w-44 xs:w-20 border-slate-200 border-[0.5px] mr-5 ">
              <img
                src={`https://erranddo.kodecreators.com/storage/${props?.icon}`}
                className=" object-cover object-center rounded-full w-44 lg:h-44  xs:h-20"
              />
            </div>
            <div className="my-2 relative ">
              <Button
                onClick={() => setShow(true)}
                variant="ghost"
                color="secondary"
                size="normal"
                centerClassName="flex items-center justify-center rounded-full"
                buttonClassName="!px-4 text-sm lg:py-[0.7rem] lg:inline !absolute top-0 right-0 dark:hover:bg-slate-700 hover:bg-slate-100 rounded-full"
              >
                <img src={editicon} />
              </Button>
              <Heading
                text={props.title}
                variant="subTitle"
                headingclassName="text-textColor !font-bold tracking-wide !text-lg dark:text-darktextColor"
              />

              <div className="lg:my-2 xs:my-2 flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs ">
                {Array.from({ length: props.ratingCount }, () => (
                  <img src={GoldStar} />
                ))}
                {Array.from({ length: 5 - props.ratingCount }, () => (
                  <img src={Star} />
                ))}
                <Heading
                  text={`${props.ratingCount} of 5 / 120`}
                  variant="subHeader"
                  headingclassName="text-gray-500 !font-normal tracking-wide !text-xs mx-1 dark:text-darktextColor"
                />
              </div>
              <div className="lg:mt-3 xs:mt-10 lg:flex xs:flex xs:flex-wrap gap-2 ">
                {props.services.map((item, key) => {
                  return (
                    <div className="flex  " key={key}>
                      <Heading
                        text={
                          item?.name?.replace(".", "") +
                          (key !== props.services.length - 1 ? "   | " : "")
                        }
                        variant="subHeader"
                        headingclassName="text-textColor !font-semibold tracking-wide !text-sm dark:text-darktextColor"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="my-2">
                <Heading
                  text={`${props.description}`}
                  variant="subHeader"
                  headingclassName="text-gray-500 !font-normal tracking-wide !lg:text-xs xs:text-md h-max dark:text-gray-400"
                />
              </div>
              <div className="mt-3 lg:mb-7 flex lg:flex-row gap-2 xs:flex-col">
                <div className="">
                  <Heading
                    text={`Years in Business : ${props.year}`}
                    variant="subHeader"
                    headingclassName="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </HomeCard>
      )}
    </div>
  );
}

export default DealerDetailSection;
