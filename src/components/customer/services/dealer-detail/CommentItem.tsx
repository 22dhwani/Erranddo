import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";

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
      <Heading
        text={props.name}
        variant="subTitle"
        headingclassName="text-textColor !font-bold tracking-wide text-md dark:text-darktextColor"
      />
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
        <Heading
          text={"Response from the business owner"}
          variant="subHeader"
          headingclassName="text-textColor my-1 !font-semibold tracking-wide !text-md dark:text-darktextColor"
        />
        <Heading
          text={props.comment}
          variant="subHeader"
          headingclassName="text-slate-600 !font-normal tracking-wide !text-xs dark:text-slate-400"
        />
      </div>
    </div>
  );
}

export default CommentItem;
