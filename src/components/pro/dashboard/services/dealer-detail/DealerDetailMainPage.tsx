import DealerDetailHero from "../../../../../assets/dealer-detail.png";
import ServiceImage from "../../../../../assets/ServiceImageBigger.png";
import DealerDetailSection from "../../../../pro/dashboard/services/dealer-detail/DealerDetailSection";
import PhotosTitle from "./PhotosTitle";
import PhotosSection from "./PhotosSection";
import ReviewsBar from "./ReviewsBar";
import CommentSection from "./CommentSection";
import ContactBar from "./ContactBar";
import NavigationPro from "../../../../UI/NavigationPro";
import HomeCard from "../../home/HomeCard";
import ServicesandLocationDetailSection from "./ServiceandLocationDetailSection";

function DealerDetailMainPage() {
  const services = {
    icon: ServiceImage,
    title: "TV Guru Limited",
    subTitle: "TV Installation, TV Wall Mounting, CCTV Installation",
    description:
      "We are a family business running for over 20 years and specialize in TV Installation in London and surrounding areas. Our quality of work and dedication is reflected in the quality of our reviews",
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
      <div className="my-5 mx-5">
        <NavigationPro isButton={true} />
        <DealerDetailSection
          title={services.title}
          subTitle={services.subTitle}
          location={services.location}
          ratingCount={services.ratingCount}
          icon={services.icon}
          description={services.description}
        />
        <ContactBar />
        <HomeCard className="px-5 pb-5">
          <PhotosTitle />
          <PhotosSection />
        </HomeCard>

        <ServicesandLocationDetailSection />
        <ReviewsBar />
        <CommentSection />
      </div>
    </div>
  );
}

export default DealerDetailMainPage;
