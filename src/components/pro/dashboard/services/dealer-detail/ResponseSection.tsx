import Heading from "../../../../UI/Heading";
import HomeCard from "../../home/HomeCard";
import Location from "../../../../../assets/LocationIcon.tsx";
import Edit from "../../../../../assets/edit.svg";
import DealerReviewsSkeleton from "../../../skeleton/Dealer/DealerReviewsSkeleton.tsx";
function ResponseSection() {
  const isLoading = true;
  return (
    <div className="">
      {isLoading ? (
        <DealerReviewsSkeleton limit={0} />
      ) : (
        <HomeCard
          children={
            <div className="xs:py-5 lg:py-1 border border-solid rounded-lg !border-[#707070] !h-full flex flex-col justify-between px-3 ">
              <div className="flex flex-row justify-between">
                <Heading
                  text={"My Response"}
                  variant="smallTitle"
                  headingclassName={`!font-semibold tracking-wide text-slate-700 dark:text-slate-400`}
                />
                <div>
                  <img src={Edit} className="mt-2" />
                </div>
              </div>
              <Heading
                text={"Thank you for using us"}
                variant="smallTitle"
                headingclassName={`tracking-wide text-slate-700  dark:text-slate-400`}
              />
            </div>
          }
          className="!bg-transparent sm:w-72 "
        />
      )}
    </div>
  );
}

export default ResponseSection;
