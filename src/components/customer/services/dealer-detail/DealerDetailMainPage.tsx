import DealerDetailHero from "../../../../assets/dealer-detail.png";
import Navigation from "../../../UI/Navigation";
import DealerDetailSection from "./DealerDetailSection";
import ServiceImage from "../../../../assets/ServiceImageBigger.png";
import PhotosTitle from "./PhotosTitle";
import PhotosSection from "./PhotosSection";
import ReviewsBar from "./ReviewsBar";
import CommentSection from "./CommentSection";
import DealerDetailSkeleton from "../skeleton/DealerDetailSkeleton";
import { fetcher } from "../../../../store/customer/home-context";
import useSWR from "swr";
import { Service } from "../../../../models/home";
import { ServiceList } from "../../../../models/customer/servicelist";

function DealerDetailMainPage() {
  const url = `https://erranddo.kodecreators.com/api/v1/businesses/1/detail`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const serviceData: ServiceList = data?.data;
  const displayPhoto = `https://erranddo.kodecreators.com/storage/${serviceData?.image}`;
  console.log(serviceData);
  const subTitle = serviceData?.services?.map((d) => d.name).toString();
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
  // const isLoading = false;
  return (
    <div className="">
      <img
        src={displayPhoto}
        className="w-full h-[24.80965147453083vh] object-cover object-center "
      />
      <div className="lg:mx-20 xl:mx-36 xs:mx-5">
        <Navigation isButton={true} />
        <div>
          {isLoading ? (
            <DealerDetailSkeleton />
          ) : (
            <DealerDetailSection
              title={serviceData?.name}
              subTitle={subTitle}
              location={services.location}
              ratingCount={
                serviceData?.reviews_avg_rating
                  ? serviceData?.reviews_avg_rating
                  : 0
              }
              icon={services.icon}
              description={serviceData?.description}
            />
          )}
        </div>
        <PhotosTitle />
        <PhotosSection />
        <ReviewsBar />
        <CommentSection />
      </div>
    </div>
  );
}

export default DealerDetailMainPage;
