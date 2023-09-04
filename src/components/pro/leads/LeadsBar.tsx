import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Edit from "../../../assets/edit.svg";
import Filter from "../../../assets/filter.svg";

import Outright from "../../../assets/outright.svg";
import LeadsList from "./LeadsList";
import LeadsSideSkeleton from "../skeleton/Leads/LeadsSideSkeleton";
import { useLead } from "../../../store/pro/lead-context";
import { useState } from "react";
import FilterLeadsModal from "../../../layout/pro-models/FilterLeads";
import useSWR from "swr";
import { fetcher } from "../../../store/customer/home-context";

function LeadsBar() {
  const { isLoading } = useLead();
  const url = `https://erranddo.kodecreators.com/api/v1/user-requests?for_pro=1&show_only_count=1`;

  let { data: count } = useSWR(url, fetcher);
  const [openModal, setOpenModal] = useState(false);
  count = count?.data;
  return (
    <div>
      {openModal && <FilterLeadsModal onCancel={() => setOpenModal(false)} />}
      {isLoading ? (
        <LeadsSideSkeleton limit={1} />
      ) : (
        <div className=" xs:pb-20 lg:pb-0 lg:overflow-y-scroll lg:h-[85vh] ">
          <div className=" ">
            <HomeCard className="rounded-md py-3 w-full flex justify-center md:gap-2 items-center ">
              <Heading
                text={`${count?.user_request_count ?? 0} Leads |  ${
                  count?.user_business_count ?? 0
                } Businesses | ${
                  count?.user_business_service_count ?? 0
                } Services`}
                variant="subHeader"
                headingclassname="!font-semibold my-2  text-slate-900 dark:text-white  tracking-wide text-center"
              />
              <div className=" hover:bg-slate-100 dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center rounded-full ">
                <img
                  src={Edit}
                  className=""
                  onClick={() => {
                    setOpenModal(true);
                  }}
                />
              </div>
              <div className=" hover:bg-slate-100 dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center rounded-full ">
                <img src={Filter} className="w-5 h-5" />
              </div>
            </HomeCard>
            <HomeCard className="rounded-md py-3 w-full flex justify-center gap-2 items-center my-3">
              <Heading
                text={`48`}
                variant="subHeader"
                headingclassname="!font-semibold my-2  text-slate-900 dark:text-white  tracking-wide "
              />
              <div className=" hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full">
                <img src={Outright} />
              </div>
              <Heading
                text={`Buy Outright`}
                variant="subHeader"
                headingclassname="!font-semibold my-2  text-primaryGreen   tracking-wide "
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
