import DealerPhotosSkeleton from "../skeleton/DealerPhotosSkeleton";
import useSWR from "swr";
import { fetcher } from "../../../../store/customer/home-context";
import { Business } from "../../../../models/customer/businesslist";
import { useParams } from "react-router";

import Heading from "../../../UI/Heading";

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

  if (!photoData || !photoData.files || photoData.files.length === 0) {
    return (
      <div className="w-full flex lg:flex-row xs:flex-col gap-3 justify-center">
        <Heading
          headingclassname=""
          text={`No Photos !! `}
          variant="subTitle"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="my-3">
        <div className="grid grid-cols-3 gap-1 my-2">
          {photoData.files.map((photo, index) => (
            <div key={index}>
              <img
                src={`https://erranddo.kodecreators.com/storage/${photo.file_path}`}
                alt={`Photo`}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
