import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Edit from "../../../assets/edit.svg";
import Outright from "../../../assets/Outright.svg";
import LeadsList from "./LeadsList";

function LeadsBar() {
  return (
    <div className=" xs:pb-20 lg:pb-0 lg:overflow-y-scroll lg:h-[83vh]">
      <div className=" ">
        <HomeCard className="rounded-md py-3 w-full flex justify-center gap-2 items-center ">
          <Heading
            text={`250 Leads | 2 Businesses | 4 Categories`}
            variant="subHeader"
            headingclassName="!font-semibold my-2  text-slate-900 dark:text-slate-400  tracking-wide text-center"
          />
          <div className=" hover:bg-slate-100 w-10 h-10 flex items-center justify-center rounded-full">
            <img src={Edit} />
          </div>
        </HomeCard>
        <HomeCard className="rounded-md py-3 w-full flex justify-center gap-2 items-center my-3">
          <Heading
            text={`48`}
            variant="subHeader"
            headingclassName="!font-semibold my-2  text-slate-900 dark:text-slate-400  tracking-wide "
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
  );
}

export default LeadsBar;
