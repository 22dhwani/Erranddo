import Heading from "../../../../UI/Heading";
import GoldStar from "../../../../../assets/GoldStar.svg";
import Star from "../../../../../assets/Star.svg";
import Button from "../../../../UI/Button";
import LeftArrow from "../../../../../assets/right-arrow.svg";
import LocationIcon from "../../../../../assets/LocationIcon";
import { useTheme } from "../../../../../store/theme-context";
import editicon from "../../../../../assets/edit-2-svgrepo-com.svg";
import HomeCard from "../../home/HomeCard";

function DealerDetailSection(props: {
  icon: any;
  title: string;
  subTitle: string;
  description: string;
  location: number;
  ratingCount: number;
}) {
  const { theme } = useTheme();
  const subServices = props.subTitle.split(",");
  return (
    <HomeCard>
      <div className="border-b-slate-300 lg:py-10 xs:py-5 my-4 px-5">
        <img src={props.icon} className="lg:w-48 xs:w-20 float-left mr-5" />
        <div className=" my-2 relative ">
          <Button
            variant="ghost"
            color="secondary"
            size="normal"
            centerClassName="flex items-center justify-center rounded-full"
            buttonClassName="!px-4 text-sm tracking-wide py-[0.7rem] lg:inline !absolute top-0 right-0 "
          >
            <img src={editicon} />
          </Button>
          <Heading
            text={props.title}
            variant="subTitle"
            headingclassName="text-textColor !font-bold tracking-wide !text-lg dark:text-darktextColor"
          />

          <div className="lg:my-3 xs:my-2 flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs ">
            {Array.from({ length: props.ratingCount }, () => (
              <img src={GoldStar} />
            ))}
            {Array.from({ length: 5 - props.ratingCount }, () => (
              <img src={Star} />
            ))}
            <Heading
              text={`${props.ratingCount} of 5 / 120`}
              variant="subHeader"
              headingclassName="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-darktextColor"
            />
          </div>
          <div className="lg:my-3 xs:mt-10 lg:flex xs:flex xs:flex-wrap gap-2">
            {subServices.map((item) => {
              return (
                <div className="flex gap-2">
                  <Heading
                    text={`${item}`}
                    variant="subHeader"
                    headingclassName="text-textColor !font-semibold tracking-wide !text-sm dark:text-darktextColor"
                  />
                  <Heading
                    text={`|`}
                    variant="subHeader"
                    headingclassName="text-textColor !font-semibold tracking-wide !text-sm "
                  />
                </div>
              );
            })}
          </div>
          <div className="my-3">
            <Heading
              text={`${props.description}`}
              variant="subHeader"
              headingclassName="text-gray-500 !font-normal tracking-wide !lg:text-xs xs:text-md"
            />
          </div>
          <div className="mt-3 lg:mb-7 flex lg:flex-row gap-2 xs:flex-col">
            <div className="">
              <Heading
                text={`Years in Business : 7`}
                variant="subHeader"
                headingclassName="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
              />
            </div>
          </div>
        </div>
      </div>
    </HomeCard>
  );
}

export default DealerDetailSection;