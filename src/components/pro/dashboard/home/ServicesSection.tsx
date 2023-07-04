import Heading from "../../../UI/Heading";
import HomeCard from "./HomeCard";
import BussinessImageOne from "../../../../assets/service-image-one.png";
import BussinessImageTwo from "../../../../assets/service-image-one.png";
import BusinessItem from "./BusinessItem";
import Add from "../../../../assets/Add.svg";
import ServiceItem from "./ServiceItem";

function ServiceSection() {
  return (
    <div className="my-7">
      <Heading
        text="My Services & Locations"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide"
      />

      <div className="grid lg:grid-cols-3 my-5 gap-5 xs:grid-cols-1">
        <ServiceItem
          title="TV Guru Limited"
          locationOne="50 miles around SE4 2PT"
          locationTwo="5 miles around BN1 7YD"
          ratingCount={4}
          progress="60%"
          leads={20}
          purchases={20}
        />

        <ServiceItem
          title="TV Guru Limited"
          locationOne="50 miles around SE4 2PT"
          locationTwo="5 miles around BN1 7YD"
          ratingCount={4}
          progress="60%"
          leads={20}
          purchases={20}
        />

        <ServiceItem
          title="TV Guru Limited"
          locationOne="50 miles around SE4 2PT"
          locationTwo="5 miles around BN1 7YD"
          ratingCount={4}
          progress="60%"
          leads={20}
          purchases={20}
        />
      </div>
      <div className="grid lg:grid-cols-3 my-5 gap-5 xs:grid-cols-1">
        <ServiceItem
          title="TV Guru Limited"
          locationOne="50 miles around SE4 2PT"
          locationTwo="5 miles around BN1 7YD"
          ratingCount={4}
          progress="60%"
          leads={20}
          purchases={20}
        />

        <ServiceItem
          title="TV Guru Limited"
          locationOne="50 miles around SE4 2PT"
          locationTwo="5 miles around BN1 7YD"
          ratingCount={4}
          progress="60%"
          leads={20}
          purchases={20}
        />
      </div>
    </div>
  );
}

export default ServiceSection;
