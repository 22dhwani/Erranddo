import { useState } from "react";
import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import Button from "../../../UI/Button";
import { useTheme } from "../../../../store/theme-context";
import LocationIcon from "../../../../assets/LocationIcon";
import { useNavigate } from "react-router-dom";

function ServiceCard(props: any) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    if (showFullDescription) {
      return props.description;
    } else {
      return props.description.substring(0, 90);
    }
  };

  const isLongDescription = props.description.length > 100;

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white box-shadow-lg drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] py-5 px-5 rounded-md flex flex-col dark:bg-dimGray flex-grow">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={`https://erranddo.kodecreators.com/storage/${props?.icon}`}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Heading
              text={props.title}
              variant="subTitle"
              headingclassName="text-textColor !font-bold tracking-wide text-md dark:text-darktextColor"
            />
            <Heading
              text={props.subTitle}
              variant="subHeader"
              headingclassName="text-textColor !font-semibold tracking-wide !text-xs dark:text-slate-400"
            />
          </div>
        </div>
        <div className="my-5">
          <Heading
            text={getDescription()}
            variant="subHeader"
            headingclassName="text-gray-500 !font-normal tracking-wide !text-xs dark:text-darktextColor"
          />
          {isLongDescription && (
            <button
              className="text-primaryBlue hover:underline text-sm"
              onClick={handleClick}
            >
              {showFullDescription ? "read less..." : "...read more"}
            </button>
          )}
        </div>
        <div className=" flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs dark:text-darktextColor">
          {Array.from({ length: props.ratingCount }, () => (
            <img src={GoldStar} alt="Gold Star" />
          ))}
          {Array.from({ length: 5 - props.ratingCount }, () => (
            <img src={Star} alt="Star" />
          ))}
          <Heading
            text={`${props.ratingCount} of 5 / 120`}
            variant="subHeader"
            headingclassName="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-slate-400"
          />
        </div>
        <div className="mt-5 flex gap-2 items-center">
          {theme === "light" && (
            <div children={<LocationIcon color="black" />} />
          )}
          {theme === "dark" && (
            <div children={<LocationIcon color="white" />} />
          )}
          <Heading
            text={`${props.location} miles away`}
            variant="subHeader"
            headingclassName="text-textColor !font-semibold tracking-wide !text-xs dark:text-darktextColor"
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
            onClick={() => {
              navigate(`/services/dealer-detail/${props?.id}`, {
                state: {
                  serviceName: props.serviceName,
                  serviceId: props.serviceId,
                },
              });
            }}
            variant="ghost"
            color="primary"
            size="normal"
            children="Show Interest"
            centerClassName="flex items-center justify-center"
            buttonClassName="!px-4 !bg-primaryBlue text-white border-0 text-sm tracking-wide w-full py-[0.7rem] "
          />
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
