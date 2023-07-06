import Heading from "../../../../UI/Heading";
import HomeCard from "../../home/HomeCard";
import Location from "../../../../../assets/LocationIcon.tsx";
import Edit from "../../../../../assets/edit.svg";
import { useTheme } from "../../../../../store/theme-context.tsx";
function ServiceandLocationItems(props: {
  title: string;
  locationOne: string;
  locationTwo: string;
}) {
  const { theme } = useTheme();
  return (
    <HomeCard
      className="px-4 py-5"
      children={
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col  ">
              <Heading
                text={props.title}
                variant="subTitle"
                headingclassName="!font-bold  tracking-wide"
              />
            </div>
            <div className=" hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full">
              <img src={Edit} />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-5">
            {theme === "light" && <div children={<Location color="black" />} />}

            {theme === "dark" && <div children={<Location color="white" />} />}
            <Heading
              text={props.locationOne}
              variant="subHeader"
              headingclassName="!font-semibold my-2 !text-sm text-slate-600 tracking-wide "
            />
          </div>

          <div className="flex items-center gap-2 mb-5">
            {theme === "light" && <div children={<Location color="black" />} />}

            {theme === "dark" && <div children={<Location color="white" />} />}
            <Heading
              text={props.locationTwo}
              variant="subHeader"
              headingclassName="!font-semibold my-2 !text-sm text-slate-600 tracking-wide "
            />
          </div>
        </div>
      }
    />
  );
}

export default ServiceandLocationItems;
