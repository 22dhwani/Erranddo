import Add from "../../../../../assets/Add.tsx";
import { useTheme } from "../../../../../store/theme-context";
import Heading from "../../../../UI/Heading";
import HomeCard from "../../home/HomeCard";

function CategorySection() {
  const { theme } = useTheme();

  return (
    <div className="">
      <HomeCard
        children={
          <div className="xs:py-10 lg:py-16 border border-dashed !border-[#707070] rounded !h-full flex justify-center items-center flex-col gap-5">
            <div>
              {theme === "light" && <div children={<Add color="black" />} />}

              {theme === "dark" && <div children={<Add color="white" />} />}
            </div>
            <Heading
              text={"Add Service"}
              variant="subHeader"
              headingclassName={` !font-semibold tracking-wide !text-lg text-slate-700  dark:text-slate-400`}
            />
          </div>
        }
        className="!bg-transparent h-full"
      />
    </div>
  );
}

export default CategorySection;
