import DealerPhotosSkeleton from "../skeleton/DealerPhotosSkeleton";
import useSWR from "swr";
import { fetcher } from "../../../../store/customer/home-context";
import { Business } from "../../../../models/customer/businesslist";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function PhotosSection() {
  const { id } = useParams();
  const url = `https://erranddo.kodecreators.com/api/v1/businesses/${id}/detail`;
  const { data, error } = useSWR(url, fetcher);
  const photoData: Business = data?.data;
  const isLoading = !data && !error;

  if (isLoading) {
    return <DealerPhotosSkeleton limit={6} />;
  }

  if (error) {
    // Handle the error state here
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div className="my-3">
      <div className="grid grid-cols-3 gap-1 my-2">
        {photoData?.files?.slice(0, 3).map((photo, index) => (
          <div key={index}>
            <img
              src={`https://erranddo.kodecreators.com/storage/${photo.file_path}`}
              alt={`Photo ${index + 1}`}
              className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-1">
          {photoData?.files?.[3] && (
            <img
              src={`https://erranddo.kodecreators.com/storage/${photoData.files[3].file_path}`}
              alt="Photo 4"
              className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
            />
          )}
        </div>
        <div className="col-span-2">
          {photoData?.files?.[4] && (
            <img
              src={`https://erranddo.kodecreators.com/storage/${photoData.files[4].file_path}`}
              alt="Photo 5"
              className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
            />
          )}
        </div>
        <div className="col-span-1">
          {photoData?.files?.[5] && (
            <img
              src={`https://erranddo.kodecreators.com/storage/${photoData.files[5].file_path}`}
              alt="Photo 6"
              className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
