import Skeleton from "../../../UI/Skeletons/Skeleton";

function DealerPhotosSkeleton({ limit }: { limit: number }) {
  return (
    <>
      <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-5 py-4 w-full">
        {[...Array(limit)].map((key) => {
          return (
            <div key={key}>
              <Skeleton
                variant="rectangular"
                className=" rounded-xl w-full h-48"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default DealerPhotosSkeleton;
