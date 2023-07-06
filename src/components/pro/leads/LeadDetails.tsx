import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";

import PhotoOne from "../../../assets/photo-one.png";
import PhotoTwo from "../../../assets/photo-two.png";
import PhotoThree from "../../../assets/photo-three.png";

function LeadDetails() {
  return (
    <HomeCard className="rounded-md  px-5 pb-10 mt-5">
      <div className="py-4 border-b-[0.5px] border-b-slate-200">
        <Heading
          text={`Leads Details`}
          variant="subHeader"
          headingclassName="!font-bold  text-textColor  text-xl tracking-wide "
        />
      </div>

      <div className="py-4 grid lg:grid-cols-2 ">
        <div>
          <Heading
            text={"How big is your TV?"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />
          <Heading
            text={`55 Inch TV`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
        <div>
          <Heading
            text={"Wall type ?"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />
          <Heading
            text={`Brick Wall`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
      </div>
      <div className="lg:py-4 grid lg:grid-cols-2 ">
        <div>
          <Heading
            text={"Have you got a bracket?"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />

          <Heading
            text={`Cable Concealing options?`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
        <div>
          <Heading
            text={"Cable Concealing options?"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />

          <Heading
            text={`Cable concealing in surface plastic...`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
      </div>
      <div className="lg:py-4 grid lg:grid-cols-2 ">
        <div>
          <Heading
            text={"Comments / Photos"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />

          <Heading
            text={`I would like a call for further details`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
      </div>
      <div className="py-4 flex justify-between gap-5">
        <div>
          <img
            src={PhotoOne}
            className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
          />
        </div>
        <div>
          <img
            src={PhotoTwo}
            className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
          />
        </div>
        <div>
          <img
            src={PhotoThree}
            className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
          />
        </div>
      </div>
    </HomeCard>
  );
}

export default LeadDetails;
