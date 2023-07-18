import { useState } from "react";
import Add from "../../../../assets/Add";
import { useService } from "../../../../store/pro/service-context";
import { useTheme } from "../../../../store/theme-context";
import Heading from "../../../UI/Heading";
import ServiceSkeleton from "../../skeleton/ServiceSkeleton";
import HomeCard from "./HomeCard";
import ServiceItem from "./ServiceItem";
import AddServiceModal from "../../../../layout/pro-models/AddServiceLayout";
import EditServiceModal from "../../../../layout/pro-models/EditServiceModal";

function ServiceSection() {
  const [openModal, setOpenModal] = useState(false);
  const { theme } = useTheme();
  const { data, isServiceLoading } = useService();

  return (
    <div className="my-7">
      {openModal && <AddServiceModal onCancel={() => setOpenModal(false)} />}
      <Heading
        text="My Services & Locations"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide dark:text-white"
      />
      <div>
        {isServiceLoading ? (
          <ServiceSkeleton limit={3} />
        ) : (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 my-5 gap-5 xs:grid-cols-1">
            {data &&
              data?.length > 0 &&
              data.map((item, key) => {
                return (
                  <div key={key}>
                    <ServiceItem
                      serviceId={item?.id}
                      title={item?.service?.name}
                      business={item?.user_bussiness?.name}
                      locationOne="50 miles around SE4 2PT"
                      locationTwo="5 miles around BN1 7YD"
                      ratingCount={4}
                      progress="60%"
                      leads={20}
                      purchases={20}
                    />
                  </div>
                );
              })}

            <HomeCard
              children={
                <div
                  onClick={() => setOpenModal(true)}
                  className="xs:py-10 cursor-pointer  border border-dashed rounded !border-[#707070] h-full flex justify-center items-center flex-col gap-5"
                >
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
