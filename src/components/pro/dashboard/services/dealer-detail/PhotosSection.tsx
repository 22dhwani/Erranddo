import DustbinIcon from "../../../../../assets/delete-svgrepo-com.svg";
import DealerPhotosSkeleton from "../../../skeleton/Dealer/DealerPhotosSkeleton";
import { useState } from "react";
import DeletePhotoModal from "../../../../../layout/pro-models/DeletePhotoModal";
import { File } from "../../../../../models/pro/business";
import Heading from "../../../../UI/Heading";
import UploadPhotosLayout from "../../../../../layout/pro-models/UploadPhotosLayout";
import HomeCard from "../../home/HomeCard";
import Add from "../../../../../assets/Add";
import { useTheme } from "../../../../../store/theme-context";
import Modal from "react-modal";
import styles from "../../../../../styles/ReactModa.module.css";
import Close from "../../../../../assets/close";

function PhotoWithDustbin(props: { src: any; alt: string; id: number }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [imgShow, setimgShow] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="relative">
      {imgShow && (
        <Modal
          isOpen={imgShow}
          onRequestClose={() => setimgShow(false)}
          className={styles.modal}
          overlayClassName={styles.modaloverlay}
        >
          <button
            className="fixed top-10 lg:right-24 xs:right-10 w-full flex justify-end"
            onClick={() => {
              setimgShow(false);
            }}
          >
            {theme === "light" && <div children={<Close color="black" />} />}
            {theme === "dark" && <div children={<Close color="white" />} />}
          </button>
          <div className={styles.modalcontent}>
            <img
              src={props.src}
              alt={props.alt}
              className="w-[100%] max-h-[40rem] object-cover"
            />
          </div>
        </Modal>
      )}
      {deleteModal && (
        <DeletePhotoModal
          onCancel={() => {
            setDeleteModal(false);
          }}
          id={props.id}
        />
      )}
      <img
        onClick={() => setimgShow(true)}
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
  const { theme } = useTheme();
  return (
    <div>
      {isLoading ? (
        <DealerPhotosSkeleton limit={6} />
      ) : (
        <div className="my-3">
          {show && <UploadPhotosLayout onCancel={() => setShow(false)} />}

          {props.images.length > 0 ? (
            <div className="grid lg:grid-cols-3 xs:grid-cols-2 w-full gap-1 my-2 h-max">
              {props.images.map((image) => {
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
              <HomeCard
                children={
                  <div
                    onClick={() => setShow(true)}
                    className="xs:py-10 lg:py-16 border border-dashed rounded !border-[#707070] h-full flex justify-center items-center flex-col gap-5 cursor-pointer"
                  >
                    <div>
                      {theme === "light" && (
                        <div children={<Add color="black" />} />
                      )}

                      {theme === "dark" && (
                        <div children={<Add color="white" />} />
                      )}
                    </div>
                    <Heading
                      text={"Add Image"}
                      variant="subHeader"
                      headingclassname={` !font-semibold tracking-wide !text-lg text-slate-700  dark:text-white`}
                    />
                  </div>
                }
                className="!bg-transparent "
              />
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
