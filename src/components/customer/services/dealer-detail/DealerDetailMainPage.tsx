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

import { ServiceList } from "../../../../models/customer/servicelist";
import { useLocation, useParams } from "react-router";
import ContactBar from "./ContactBar";

function DealerDetailMainPage() {
  const businessId = useParams();
  const serviceName = useLocation()?.state?.serviceName;
  const userRequestId = useLocation()?.state?.userRequestId;
  const distance = useLocation()?.state?.distance;
  const url = `https://erranddo.kodecreators.com/api/v1/businesses/${businessId?.id}/detail?user_request_id=${userRequestId}`;

  const { data, isLoading } = useSWR(url, fetcher);
  const serviceData: ServiceList = data?.data;

  const displayPhoto = `https://erranddo.kodecreators.com/storage/${serviceData?.image}`;

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

  return (
    <div className="">
      <img
        src={DealerDetailHero}
        className="w-full h-[24.80965147453083vh] object-cover object-center "
      />
      <div className="lg:mx-20 xl:mx-36 xs:mx-5">
        <Navigation isButton={true} />
        <div>
          {isLoading ? (
            <DealerDetailSkeleton />
          ) : (
            <DealerDetailSection
              requestId={userRequestId}
              service={serviceName}
              userBusinessId={serviceData?.user_id}
              title={serviceData?.name}
              subTitle={subTitle}
              location={distance}
              ratingCount={
                serviceData?.reviews_avg_rating
                  ? serviceData?.reviews_avg_rating
                  : 0
              }
              icon={displayPhoto}
              description={serviceData?.description}
              quote={
                serviceData?.request_quotes.length > 0
                  ? serviceData.request_quotes[0]?.quote
                  : ""
              }
              quoteType={
                serviceData?.request_quotes.length > 0
                  ? serviceData.request_quotes[0]?.payment_type
                  : ""
              }
            />
          )}
        </div>
        {serviceData?.responded_requests.length > 0 ? (
          <ContactBar
            website={serviceData?.website_url}
            email={serviceData?.email}
            phone_number={serviceData?.mobile_number}
            facebook={serviceData?.facebook_url}
            instagram={serviceData?.instagram_url}
            twitter={serviceData?.twitter_url}
          />
        ) : null}
        <PhotosTitle data={serviceData} />
        <PhotosSection />
        <ReviewsBar />
        <CommentSection />
      </div>
    </div>
  );
}

export default DealerDetailMainPage;
