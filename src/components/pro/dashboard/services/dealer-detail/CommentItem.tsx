import Heading from "../../../../UI/Heading";
import GoldStar from "../../../../../assets/GoldStar.svg";
import Star from "../../../../../assets/Star.svg";
import ResponseSection from "./ResponseSection";
import Flag from "../../../../../assets/flag-svgrepo-com.svg";
import Reply from "../../../../../assets/reply.svg";

function CommentItem(props: {
  name: string;
  subTitle: string;
  description: string;
  date: string;
  ratingCount: number;
  comment: string;
}) {
  return (
    <div className="flex flex-col gap-3 py-5">
      <div className="flex flex-row justify-between font-poppins">
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
          headingclassName="text-primaryBlue mb-1 !font-semibold tracking-wide !text-sm dark:text-white"
        />
        <Heading
          text={props.description}
          variant="subHeader"
          headingclassName="text-slate-600 !font-normal tracking-wide !text-xs dark:text-slate-400"
        />
      </div>
      <div>
        {props.comment ? (
          <ResponseSection comment={props.comment} />
        ) : (
          <div className="flex gap-3">
            <img src={Reply} />
            <Heading
              text="Reply"
              variant="smallTitle"
              headingclassName={`tracking-wide text-primaryBlue !font-bold`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentItem;
