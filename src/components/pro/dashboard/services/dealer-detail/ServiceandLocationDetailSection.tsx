import Heading from "../../../../UI/Heading";
import CategorySection from "./CategorySection";
import ServiceandLocationItems from "./ServicesandLocationItems";

function ServicesandLocationDetailSection() {
  return (
    <div className="my-7">
      <Heading
        text="My Services & Locations"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide"
      />

      <div className="grid lg:grid-cols-3 my-5 gap-5 xs:grid-cols-1">
        <ServiceandLocationItems
          title="TV Wall mounting"
          locationOne="50 miles around SE4 2PT"
          locationTwo="5 miles around BN1 7YD"
        />

        <ServiceandLocationItems
          title="TV Repair"
          locationOne="20 miles around SE4 2PT"
          locationTwo="20 miles around SE4 2PT"
        />
        <ServiceandLocationItems
          title="Aerial Installation"
          locationOne="20 miles around SE4 2PT"
          locationTwo="20 miles around SE4 2PT"
        />
        <ServiceandLocationItems
          title="Aerial Installation"
          locationOne="20 miles around SE4 2PT"
          locationTwo="20 miles around SE4 2PT"
        />
        <CategorySection />
      </div>
    </div>
  );
}

export default ServicesandLocationDetailSection;
