import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Edit from "../../../assets/edit.svg";
import Outright from "../../../assets/outright.svg";
import LeadsList from "./LeadsList";
import LeadsSideSkeleton from "../skeleton/Leads/LeadsSideSkeleton";
import { useLead } from "../../../store/pro/lead-context";
import { useState } from "react";
import FilterLeadsModal from "../../../layout/pro-models/FilterLeads";

function LeadsBar() {
  const { leads, business, service, isLoading, filter } = useLead();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal && <FilterLeadsModal onCancel={() => setOpenModal(false)} />}
      {isLoading ? (
        <LeadsSideSkeleton limit={1} />
      ) : (
        <div className=" xs:pb-20 lg:pb-0 lg:overflow-y-scroll lg:h-[85vh] ">
          <div className=" ">
            <HomeCard className="rounded-md py-3 w-full flex justify-center gap-2 items-center ">
              <Heading
                text={`${leads?.length} Leads |  ${business.length} Businesses | ${service.length} Services`}
                variant="subHeader"
                headingclassName="!font-semibold my-2  text-slate-900 dark:text-white  tracking-wide text-center"
              />
              <div
                className=" hover:bg-slate-100 dark:hover:bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <img src={Edit} />
              </div>
            </HomeCard>
            <HomeCard className="rounded-md py-3 w-full flex justify-center gap-2 items-center my-3">
              <Heading
                text={`48`}
                variant="subHeader"
                headingclassName="!font-semibold my-2  text-slate-900 dark:text-white  tracking-wide "
              />
              <div className=" hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full">
                <img src={Outright} />
              </div>
              <Heading
                text={`Buy Outright`}
                variant="subHeader"
                headingclassName="!font-semibold my-2  text-primaryGreen   tracking-wide "
              />
            </HomeCard>
          </div>
          <LeadsList />
        </div>
      )}
    </div>
  );
}

export default LeadsBar;
