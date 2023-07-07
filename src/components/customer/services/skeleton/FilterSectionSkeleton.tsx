import Skeleton from "../../../UI/Skeletons/Skeleton";
import FilterSection from "../service-detail/FilterSection";

const FilterSectionSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-1 xs:grid-cols-1 gap-5 mt-5 w-full">
      <div>
        <Skeleton
          variant="rectangular"
          className=" rounded-xl w-full h-20 bg-slate-200"
        />
      </div>
    </div>
  );
};

export default FilterSectionSkeleton;
