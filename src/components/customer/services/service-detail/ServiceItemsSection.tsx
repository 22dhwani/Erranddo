import { useState } from "react";
import ShowInterestToAllModal from "../../../../layout/customer/ShowInterestToAllModal";
import { Business } from "../../../../models/customer/businesslist";
import ServiceDetailSkeleton from "../skeleton/ServiceDetailSkeleton";
import ServiceCard from "./ServiceItem";

function ServiceItemsSection(props: {
  services: any[];
  name?: string;
  id?: number;
  isLoading?: boolean;
}) {
  const dataList = props?.services;
  const businessList: Business[] = [];
  for (let i = 0; i < dataList.length; i++) {
    dataList[i]?.map((d: Business) => businessList.push(d));
  }
  const isLoading = props?.isLoading;
  // console.log(businessList[0]?.request_quotes[0]);

  return (
    <div>
      {isLoading ? (
        <ServiceDetailSkeleton limit={3} />
      ) : (
        <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 rounded-sm gap-5 ">
          {businessList?.map((item: Business) => {
            return (
              <ServiceCard
                serviceName={props.name}
                serviceId={props.id}
                id={item?.id}
                icon={item?.image}
                title={item?.name}
                subTitle={item?.services}
                description={item?.description}
                location={"0"}
                ratingCount={item?.reviews_avg_rating}
                isInterested={item.is_interest}
                quote={item?.request_quotes}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ServiceItemsSection;
