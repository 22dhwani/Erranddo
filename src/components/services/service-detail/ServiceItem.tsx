import Heading from "../../UI/Heading";
import GoldStar from "../../../assets/GoldStar.svg";
import Star from "../../../assets/Star.svg";
import Location from "../../../assets/Location.svg";
import Button from "../../UI/Button";

function ServiceCard(props: {
  icon: any;
  title: string;
  subTitle: string;
  description: string;
  location: string;
  ratingCount: number;
  isInterested: boolean;
}) {
  return (
    <div>
      <div className="bg-white box-shadow-lg drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] py-5 px-5 rounded-md flex flex-col">
        <div className="flex items-center gap-2">
          <div>
            <img src={props.icon} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Heading
              text={props.title}
              variant="subTitle"
              headingclassName="text-textColor !font-bold tracking-wide text-md"
            />
            <Heading
              text={props.subTitle}
              variant="subHeader"
              headingclassName="text-textColor !font-semibold tracking-wide !text-xs"
            />
          </div>
        </div>
        <div className="my-5">
          <Heading
            text={props.description}
            variant="subHeader"
            headingclassName="text-gray-500 !font-normal tracking-wide !text-xs"
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
            text={`${props.ratingCount} of 5 / 120`}
            variant="subHeader"
            headingclassName="text-gray-500 !font-normal tracking-wide !text-xs mx-2"
          />
        </div>
        <div className="mt-5 flex gap-2 items-center">
          <img src={Location} />
          <Heading
            text={`${props.location} miles away`}
            variant="subHeader"
            headingclassName="text-textColor !font-semibold tracking-wide !text-xs"
          />
        </div>
      </div>
      <div className="my-5">
        {props.isInterested ? (
          <Button
            variant="filled"
            color="primary"
            size="normal"
            children="Show Interest"
            centerClassName="flex items-center justify-center"
            buttonClassName="!px-4  text-sm tracking-wide w-full py-[0.7rem]"
          />
        ) : (
          <Button
            variant="ghost"
            color="primary"
            size="normal"
            children="Show Interest"
            centerClassName="flex items-center justify-center"
            buttonClassName="!px-4  text-sm tracking-wide w-full py-[0.7rem]"
          />
        )}
      </div>
    </div>
  );
}

export default ServiceCard;