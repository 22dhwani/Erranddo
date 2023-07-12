import Add from "../../../../assets/Add";
import { useTheme } from "../../../../store/theme-context";
import Heading from "../../../UI/Heading";
import ServiceSkeleton from "../../skeleton/ServiceSkeleton";
import HomeCard from "./HomeCard";
import ServiceItem from "./ServiceItem";

function ServiceSection() {
  const isLoading = false;
  const { theme } = useTheme();

  return (
    <div className="my-7">
      <Heading
        text="My Services & Locations"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide dark:text-white"
      />
      <div>
        {isLoading ? (
          <ServiceSkeleton limit={3} />
        ) : (
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
            <HomeCard
              children={
                <div className="xs:py-10 lg:py-16 border border-dashed rounded !border-[#707070] h-full flex justify-center items-center flex-col gap-5">
                  <div>
                    {theme === "light" && (
                      <div children={<Add color="black" />} />
                    )}

                    {theme === "dark" && (
                      <div children={<Add color="white" />} />
                    )}
                  </div>
                  <Heading
                    text={"Add Service"}
                    variant="subHeader"
                    headingclassName={` !font-semibold tracking-wide !text-lg text-slate-700  dark:text-slate-400`}
                  />
                </div>
              }
              className="!bg-transparent "
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceSection;
