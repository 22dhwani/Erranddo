import HomeCard from "./HomeCard";

import Edit from "../../../../assets/edit.svg";
import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import ProgressBar from "../../../UI/ProgressBar";

function BusinessItem(props: {
  image: any;
  title: string;
  subTitle: string;
  description: string;
  ratingCount: number;
  progress: string;
}) {
  return (
    <a href="/pro/services/dealer-detail">
      <HomeCard
        className="px-4 py-5"
        children={
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={props.image} className="w-16 h-16" />
                <Heading
                  text={props.title}
                  variant="subTitle"
                  headingclassName="!font-bold mx-1 tracking-wide dark:text-white"
                />
              </div>
              <div className=" hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full">
                <img src={Edit} />
              </div>
            </div>
            <Heading
              text={props.subTitle}
              variant="subHeader"
              headingclassName="!font-semibold my-2 !text-sm text-slate-900 dark:text-slate-400  tracking-wide !leading-relaxed"
            />
            <Heading
              text={props.description}
              variant="subHeader"
              headingclassName="!font-normal my-2 !text-sm text-slate-600 dark:text-slate-400  tracking-wide !leading-relaxed"
            />
            <div className=" flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs dark:text-darktextColor">
              {Array.from({ length: props.ratingCount }, () => (
                <img src={GoldStar} />
              ))}
              {Array.from({ length: 5 - props.ratingCount }, () => (
                <img src={Star} />
              ))}
              <Heading
                text={`${props.ratingCount} of 5 / 120`}
                variant="subHeader"
                headingclassName="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-slate-400"
              />
            </div>
            <div>
              <div className="flex justify-between my-5">
                <Heading
                  text={`Profile`}
                  variant="subHeader"
                  headingclassName="text-textColor !font-semibold tracking-wide text-xs  dark:text-slate-400"
                />
                <Heading
                  text={props.progress}
                  variant="subHeader"
                  headingclassName={`${
                    +props.progress.split("%")[0] < 50
                      ? "text-red-600"
                      : "text-primaryBlue"
                  }  !font-semibold tracking-wide !text-xs  dark:text-slate-400`}
                />
              </div>
              <ProgressBar width={props.progress} />
            </div>
          </div>
        }
      />
    </a>
  );
}

export default BusinessItem;
