import Add from "../../../../../assets/Add.svg";
import Heading from "../../../../UI/Heading";
import HomeCard from "../../home/HomeCard";

function CategorySection() {
  return (
    <div className="">
      <HomeCard
        children={
          <div className="xs:py-10 lg:py-0 border border-dashed !border-[#707070] !h-full flex justify-center items-center flex-col gap-5">
            <div>
              <img src={Add} />
            </div>
            <Heading
              text={"Add Category"}
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
