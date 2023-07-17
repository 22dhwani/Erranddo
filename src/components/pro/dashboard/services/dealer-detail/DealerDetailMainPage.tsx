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
import { useParams } from "react-router";
import { useEffect } from "react";
import { useBusiness } from "../../../../../store/pro/dashboard-context";
import { Service } from "../../../../../models/home";
import DealerDetailSkeleton from "../../../skeleton/Dealer/DealerDetailSkeleton";
import DealerContactSkeleton from "../../../skeleton/Dealer/DealerContactSkeleton";
import DealerPhotosSkeleton from "../../../skeleton/Dealer/DealerPhotosSkeleton";
import { File } from "../../../../../models/pro/business";
import { useReview } from "../../../../../store/pro/review-context";

function DealerDetailMainPage() {
  const id = useParams().id;

  const { detailBusiness, businessDetail, isBussinessDetailLoading } =
    useBusiness();
  const { getBusinessReviews, data } = useReview();
  useEffect(() => {
    detailBusiness(id ? +id : undefined);
    getBusinessReviews(id ? +id : undefined);
  }, []);
  console.log(businessDetail);

  return (
    <div className="">
      <img
        src={DealerDetailHero}
        className="w-full h-[24.80965147453083vh] object-cover object-center "
      />
      <div className="my-5 ">
        <NavigationPro isButton={true} />
        {isBussinessDetailLoading ? (
          <DealerDetailSkeleton />
        ) : (
          <DealerDetailSection
            year={
              new Date().getFullYear() -
              new Date(businessDetail?.created_at ?? "").getFullYear()
            }
            title={businessDetail?.name ?? "No Name"}
            services={businessDetail?.services ?? ([] as Service[])}
            ratingCount={businessDetail?.reviews_avg_rating ?? 0}
            icon={businessDetail?.image}
            description={businessDetail?.description ?? "No Description"}
          />
        )}
        {isBussinessDetailLoading ? <DealerContactSkeleton /> : <ContactBar />}
        {isBussinessDetailLoading ? (
          <DealerPhotosSkeleton limit={6} />
        ) : (
          <HomeCard className="px-5 pb-5">
            <PhotosTitle />
            <PhotosSection images={businessDetail?.files ?? ([] as File[])} />
          </HomeCard>
        )}

        <ServicesandLocationDetailSection
          services={businessDetail?.services ?? []}
        />
        <ReviewsBar />
        <CommentSection reviews={data ?? []} />
      </div>
    </div>
  );
}

export default DealerDetailMainPage;
