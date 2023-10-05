import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import Edit from "../../../../assets/edit.svg";
import { useState } from "react";
import LeaveReviewModal from "../../../../layout/pro-models/LeaveReviewModal";

function CommentItem(props: {
  id: number;
  name: string;
  subTitle: string;
  description: string;
  date: string;
  ratingCount: number;
  comment: string;
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal && (
        <LeaveReviewModal id={props.id} onCancel={() => setOpenModal(false)} />
      )}
      <div className="flex flex-col gap-3 border-b-[0.5px] border-b-slate-300 py-5">
        <div className="flex flex-row justify-between font-poppins">
          <Heading
            text={props.name}
            variant="subTitle"
            headingclassname="text-textColor !font-bold tracking-wide text-md dark:text-darktextColor"
          />
          <img
            src={Edit}
            className=""
            onClick={() => {
              setOpenModal(true);
            }}
          />
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
            headingclassname="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-darktextColor"
          />
        </div>
        <div>
          <Heading
            text={props.subTitle}
            variant="subHeader"
            headingclassname="text-primaryBlue my-1 !font-semibold tracking-wide !text-xs"
          />
          <Heading
            text={props.description}
            variant="subHeader"
            headingclassname="text-slate-600 !font-normal tracking-wide !text-md dark:text-slate-400"
          />
        </div>
        {props.comment && (
          <div>
            <Heading
              text={"Response from the business owner"}
              variant="smallTitle"
              headingclassname="text-textColor my-1 !font-semibold tracking-wide !text-md dark:text-darktextColor"
            />
            <Heading
              text={props.comment}
              variant="subHeader"
              headingclassname="text-slate-600 !font-normal tracking-wide capitalize !text-xs dark:text-slate-400"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentItem;
