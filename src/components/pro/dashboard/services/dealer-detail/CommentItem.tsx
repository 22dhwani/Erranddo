import Heading from "../../../../UI/Heading";
import GoldStar from "../../../../../assets/GoldStar.svg";
import Star from "../../../../../assets/Star.svg";
import ResponseSection from "./ResponseSection";
import Flag from "../../../../../assets/flag-svgrepo-com.svg";
function CommentItem(props: {
  name: string;
  subTitle: string;
  description: string;
  date: string;
  ratingCount: number;
  comment: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-b-[0.5px] border-b-slate-300 py-5">
      <div className="flex flex-row justify-between">
        <Heading
          text={props.name}
          variant="subTitle"
          headingclassName="text-textColor !font-bold tracking-wide text-md dark:text-darktextColor"
        />
        <div>
          <img src={Flag} className="" />
        </div>
      </div>
      <div className=" flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs">
        {Array.from({ length: props.ratingCount }, () => (
          <img src={GoldStar} />
        ))}
        {Array.from({ length: 5 - props.ratingCount }, () => (
          <img src={Star} />
        ))}
        <Heading
          text={`${props.date}`}
          variant="subHeader"
          headingclassName="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-darktextColor"
        />
      </div>
      <div>
        <Heading
          text={props.subTitle}
          variant="subHeader"
          headingclassName="text-primaryBlue my-1 !font-semibold tracking-wide !text-xs"
        />
        <Heading
          text={props.description}
          variant="subHeader"
          headingclassName="text-slate-600 !font-normal tracking-wide !text-xs dark:text-slate-400"
        />
      </div>
      <div>
        <ResponseSection />
      </div>
    </div>
  );
}

export default CommentItem;
