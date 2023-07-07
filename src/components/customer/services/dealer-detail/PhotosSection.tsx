import PhotoOne from "../../../../assets/photo-one.png";
import PhotoTwo from "../../../../assets/photo-two.png";
import PhotoThree from "../../../../assets/photo-three.png";
import PhotoFour from "../../../../assets/photo-four.png";
import PhotoFive from "../../../../assets/photo-five.png";

import PhotoSix from "../../../../assets/photo-six.png";
import DealerPhotosSkeleton from "../skeleton/DealerPhotosSkeleton";

function PhotosSection() {
  const isLoading = false;
  return (
    <div>
      {isLoading ? (
        <DealerPhotosSkeleton limit={6} />
      ) : (
        <div className="my-3">
          <div className="grid grid-cols-3 w-full gap-1 my-2">
            <div>
              <img
                src={PhotoOne}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
            <div>
              <img
                src={PhotoTwo}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
            <div>
              <img
                src={PhotoThree}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 w-full gap-1">
            <div className="col-span-1">
              <img
                src={PhotoFour}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <img
                src={PhotoFive}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src={PhotoSix}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotosSection;
