import DetailHero from "../../../../assets/detail-hero.png";
import Button from "../../../UI/Button";
import Navigation from "../../../UI/Navigation";
import AnswersSections from "./AnswersSections";
import FilterSection from "./FilterSection";
import ServiceItemsSection from "./ServiceItemsSection";
import ServiceTitle from "./ServiceTitle";
import ServiceQuestionsSkeleton from "../skeleton/ServiceQuestionSkeleton";
import useSWR from "swr";
import { fetcher } from "../../../../store/customer/home-context";
import { useParams } from "react-router";
import { Request } from "../../../../models/customer/requestlist";
import { Business } from "../../../../models/customer/businesslist";
import { useEffect, useState } from "react";

function SeviceDetailMainPage() {
  const requestId = useParams();

  const url = `https://erranddo.kodecreators.com/api/v1/user-requests/${requestId?.id}/detail`;
  const { data, isLoading } = useSWR(url, fetcher);
  const serviceRequestData: Request = data?.data;

  const serviceId = serviceRequestData?.service_id;
  const [businessUrl, setBusinessUrl] = useState({});
  const { data: businessData } = useSWR(businessUrl, fetcher);
  const businessesData: Business = businessData?.data;
  useEffect(() => {
    setBusinessUrl(
      `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${serviceId}`
    );
  }, [serviceId]);

  const array = [serviceRequestData];
  const services = [businessesData];
  // const isLoading = false;
  return (
    <div className="dark:bg-black ">
      <img
        src={DetailHero}
        className="w-full h-[24.80965147453083vh] object-cover xs:object-center "
      />

      <div className="lg:mx-20 xl:mx-36 xs:mx-5 ">
        <Navigation isButton={true} />
        <div>
          {isLoading ? (
            <ServiceQuestionsSkeleton />
          ) : (
            <div>
              <ServiceTitle data={serviceRequestData} />
              <AnswersSections array={array} />
            </div>
          )}
        </div>
        <div>
          <Button
            variant="filled"
            color="secondary"
            size="normal"
            children="Close Request"
            centerClassName="flex items-center justify-center"
            buttonClassName="!px-4 py-2 text-sm tracking-wide md:hidden  w-full"
          />
          <FilterSection
            list={services}
            onChange={(sort: string) => {
              if (sort === "Highest overall score") {
                setBusinessUrl(
                  `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${serviceRequestData?.service_id}&sort_field=reviews_avg_rating&sort_order=desc`
                );
              } else if (sort === "Registration date") {
                setBusinessUrl(
                  `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${serviceRequestData?.service_id}&sort_field=created_at&sort_order=desc`
                );
              }
            }}
          />
          <ServiceItemsSection
            services={services}
            id={serviceRequestData?.service?.id}
            name={serviceRequestData?.service?.name}
          />
        </div>
      </div>
    </div>
  );
}

export default SeviceDetailMainPage;
