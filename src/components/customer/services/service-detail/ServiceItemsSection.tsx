import ServiceCard from "./ServiceItem";

function ServiceItemsSection(props: { services: any[] }) {
  return (
    <div className="my-5 grid lg:grid-cols-3 xs:grid-cols-1 rounded-sm gap-5">
      {props.services.map((item) => {
        return (
          <ServiceCard
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            location={item.location}
            ratingCount={item.ratingCount}
            isInterested={item.isInterested}
          />
        );
      })}
    </div>
  );
}

export default ServiceItemsSection;
