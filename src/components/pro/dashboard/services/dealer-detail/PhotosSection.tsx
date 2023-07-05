import PhotoOne from "../../../../../assets/photo-one.png";
import PhotoTwo from "../../../../../assets/photo-two.png";
import PhotoThree from "../../../../../assets/photo-three.png";
import PhotoFour from "../../../../../assets/photo-four.png";
import PhotoFive from "../../../../../assets/photo-five.png";
import PhotoSix from "../../../../../assets/photo-six.png";
import DustbinIcon from "../../../../../assets/delete-svgrepo-com.svg";

function PhotoWithDustbin(props: { src: any; alt: string }) {
  return (
    <div className="relative">
      <img
        src={props.src}
        className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
        alt={props.alt}
      />

      <div className="absolute bottom-1 right-1">
        <button>
          <div className="w-5 h-5 bg-white">
            <img src={DustbinIcon} className="w-3 h-5 m-1" alt="Dustbin Icon" />
          </div>
        </button>
      </div>
    </div>
  );
}

function PhotosSection() {
  return (
    <div className="my-3">
      <div className="grid grid-cols-3 w-full gap-1 my-2">
        <div>
          <PhotoWithDustbin src={PhotoOne} alt="Photo One" />
        </div>
        <div>
          <PhotoWithDustbin src={PhotoTwo} alt="Photo Two" />
        </div>
        <div>
          <PhotoWithDustbin src={PhotoThree} alt="Photo Three" />
        </div>
      </div>
      <div className="grid grid-cols-4 w-full gap-1">
        <div className="col-span-1">
          <PhotoWithDustbin src={PhotoFour} alt="Photo Four" />
        </div>
        <div className="col-span-2">
          <PhotoWithDustbin src={PhotoFive} alt="Photo Five" />
        </div>
        <div className="col-span-1">
          <PhotoWithDustbin src={PhotoSix} alt="Photo Six" />
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
