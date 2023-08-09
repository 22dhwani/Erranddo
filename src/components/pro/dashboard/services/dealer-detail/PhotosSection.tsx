import DustbinIcon from "../../../../../assets/delete-svgrepo-com.svg";
import DealerPhotosSkeleton from "../../../skeleton/Dealer/DealerPhotosSkeleton";
import { useState } from "react";
import DeletePhotoModal from "../../../../../layout/pro-models/DeletePhotoModal";
import { File } from "../../../../../models/pro/business";
import Heading from "../../../../UI/Heading";
import UploadPhotosLayout from "../../../../../layout/pro-models/UploadPhotosLayout";

function PhotoWithDustbin(props: { src: any; alt: string; id: number }) {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className="relative">
      {deleteModal && (
        <DeletePhotoModal
          onCancel={() => {
            setDeleteModal(false);
          }}
          id={props.id}
        />
      )}
      <img
        src={props.src}
        className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
        alt={props.alt}
      />
      <div className="absolute bottom-1 right-1">
        <button
          onClick={() => {
            setDeleteModal(true);
          }}
        >
          <div className="w-5 h-5 bg-white">
            <img src={DustbinIcon} className="w-3 h-5 m-1" alt="Dustbin Icon" />
          </div>
        </button>
      </div>
    </div>
  );
}

function PhotosSection(props: { images: File[] }) {
  const isLoading = false;
  const [show, setShow] = useState(false);

  return (
    <div>
      {isLoading ? (
        <DealerPhotosSkeleton limit={6} />
      ) : (
        <div className="my-3">
          {show && <UploadPhotosLayout onCancel={() => setShow(false)} />}

          {props.images.length > 0 ? (
            <div className="grid grid-cols-3 w-full gap-1 my-2">
              {props.images.map((image) => {
                console.log(image.id);
                return (
                  <div className="col-span-1 border-[0.4px] border-slate-200">
                    <PhotoWithDustbin
                      id={image.id}
                      src={`https://erranddo.kodecreators.com/storage/${image.file_path}`}
                      alt="Photo One"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full flex lg:flex-row xs:flex-col gap-3 justify-center">
              <Heading
                headingclassname=""
                text={`No Photos !! `}
                variant="subTitle"
              />
              <div onClick={() => setShow(true)}>
                <Heading
                  headingclassname="text-primaryBlue cursor-pointer"
                  text={`Upload your Service Photos`}
                  variant="subTitle"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PhotosSection;
