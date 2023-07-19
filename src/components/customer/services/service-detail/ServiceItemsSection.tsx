import { Business } from "../../../../models/customer/businesslist";
import ServiceDetailSkeleton from "../skeleton/ServiceDetailSkeleton";
import ServiceCard from "./ServiceItem";

function ServiceItemsSection(props: {
  services: any[];
  name?: string;
  id?: number;
}) {
  const isLoading = false;
  const dataList = props?.services;
  const businessList: Business[] = [];
  for (let i = 0; i < dataList.length; i++) {
    dataList[i]?.map((d: Business) => businessList.push(d));
  }

  return (
    <div>
      {isLoading ? (
        <ServiceDetailSkeleton limit={4} />
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
                // isInterested={item.isInterested}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ServiceItemsSection;
