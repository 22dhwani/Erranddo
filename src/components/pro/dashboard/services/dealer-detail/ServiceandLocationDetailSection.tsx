import Heading from "../../../../UI/Heading";
import DealerServiceSkeleton from "../../../skeleton/Dealer/DealerServiceSkeleton";
import CategorySection from "./CategorySection";
import ServiceandLocationItems from "./ServicesandLocationItems";

function ServicesandLocationDetailSection() {
  const isLoading = false;
  return (
    <div className="mt-7">
      <Heading
        text="My Services & Locations"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide dark:text-white"
      />
      <div>
        {isLoading ? (
          <DealerServiceSkeleton limit={5} />
        ) : (
          <div className="grid lg:grid-cols-3 mt-5 gap-5 xs:grid-cols-1 dark:text-white">
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
        )}
      </div>
    </div>
  );
}

export default ServicesandLocationDetailSection;
