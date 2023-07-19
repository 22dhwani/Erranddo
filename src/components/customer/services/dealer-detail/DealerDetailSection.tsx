import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import Button from "../../../UI/Button";
import LeftArrow from "../../../../assets/right-arrow.svg";
import LocationIcon from "../../../../assets/LocationIcon";
import { useTheme } from "../../../../store/theme-context";
import { useNavigate } from "react-router";

function DealerDetailSection(props: {
  icon: any;
  title: string;
  subTitle: string;
  description: string;
  location: number;
  ratingCount: number;
}) {
  const { theme } = useTheme();
  const subServices = props?.subTitle?.split(",") ?? [];

  const navigate = useNavigate();

  return (
    <>
      <div className="border-b-[0.5px] border-b-slate-300 lg:py-10 xs:py-5 ">
        <img
          src={props.icon}
          className="lg:w-48 xs:w-20 float-left mr-5 lg:h-48 xs:h-20 rounded-full object-cover"
        />
        <div className=" my-2 relative">
          <Button
            variant="filled"
            color="primary"
            size="normal"
            children="Messages"
            centerClassName="flex items-center justify-center"
            buttonClassName="!px-4  text-sm tracking-wide py-[0.7rem] xs:hidden lg:inline !absolute top-0 right-0"
            onClick={() => navigate("/messages")}
          />
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
            {subServices.map((item, key) => {
              return (
                <div className="flex gap-2">
                  <Heading
                    text={
                      item.replace(".", "") +
                      (key !== subServices.length - 1 ? "   | " : "")
                    }
                    variant="subHeader"
                    headingclassName="text-textColor !font-semibold tracking-wide !text-sm dark:text-darktextColor"
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

          <div className="mt-3 lg:mb-7 flex lg:flex-row gap-2 lg:items-center xs:flex-col">
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden" />
              <Heading
                text={`Response Time : 34 min`}
                variant="subHeader"
                headingclassName="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md"
              />
            </div>
            <Heading
              text={`|`}
              variant="subHeader"
              headingclassName="text-primaryYellow !font-normal tracking-wide !text-sm xs:hidden lg:inline"
            />
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden " />
              <Heading
                text={`Years in Business : 7`}
                variant="subHeader"
                headingclassName="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
              />
            </div>

            <Heading
              text={`|`}
              variant="subHeader"
              headingclassName="text-primaryYellow !font-normal tracking-wide !text-sm xs:hidden lg:inline"
            />
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden" />
              <Heading
                text={`Errando Hires : 25`}
                variant="subHeader"
                headingclassName="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
              />
            </div>
            <Heading
              text={`|`}
              variant="subHeader"
              headingclassName="text-primaryYellow !font-normal tracking-wide !text-sm xs:hidden lg:inline "
            />
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden" />
              <div className=" flex gap-2 items-center">
                {theme === "light" && (
                  <div children={<LocationIcon color="black" />} />
                )}

                {theme === "dark" && (
                  <div children={<LocationIcon color="white" />} />
                )}
                <Heading
                  text={`${props.location} miles away`}
                  variant="subHeader"
                  headingclassName="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
                />
              </div>
            </div>
            <div className=" mt-3">
              <Button
                variant="filled"
                color="primary"
                size="normal"
                children="Messages"
                centerClassName="flex items-center justify-center"
                buttonClassName="!px-4  text-sm tracking-wide py-[0.7rem] lg:hidden w-full"
                onClick={() => navigate("/messages")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealerDetailSection;
