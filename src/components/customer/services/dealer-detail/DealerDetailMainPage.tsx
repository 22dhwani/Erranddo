import DealerDetailHero from "../../../../assets/dealer-detail.png";
import Navigation from "../../../UI/Navigation";
import DealerDetailSection from "./DealerDetailSection";
import ServiceImage from "../../../../assets/ServiceImageBigger.png";
import PhotosTitle from "./PhotosTitle";
import PhotosSection from "./PhotosSection";
import ReviewsBar from "./ReviewsBar";
import CommentSection from "./CommentSection";

function DealerDetailMainPage() {
  const services = {
    icon: ServiceImage,
    title: "TV Guru Limited",
    subTitle: "TV Installation, TV Wall Mounting, CCTV Installation",
    description:
      "We are a family business running for over 20 years and specialize in TV Installation in London.",
    location: 5,
    ratingCount: 4,
    isInterested: true,
  };
  return (
    <div className="">
      <img
        src={DealerDetailHero}
        className="w-full h-[24.80965147453083vh] object-cover object-center "
      />
      <div className="lg:mx-20 xl:mx-36 xs:mx-5">
        <Navigation isButton={true} />
        <DealerDetailSection
          title={services.title}
          subTitle={services.subTitle}
          location={services.location}
          ratingCount={services.ratingCount}
          icon={services.icon}
          description={services.description}
        />
        <PhotosTitle />
        <PhotosSection />
        <ReviewsBar />
        <CommentSection />
      </div>
    </div>
  );
}

export default DealerDetailMainPage;
