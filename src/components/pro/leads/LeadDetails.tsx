import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Credit from "../../../assets/Credit.svg";

import PhotoOne from "../../../assets/photo-one.png";
import PhotoTwo from "../../../assets/photo-two.png";
import PhotoThree from "../../../assets/photo-three.png";
import Button from "../../UI/Button";

function LeadDetails() {
  return (
    <HomeCard className="rounded-md  px-5 pb-10 mt-5">
      <div className="py-4 border-b-[0.5px] border-b-slate-200">
        <Heading
          text={`Leads Details`}
          variant="subHeader"
          headingclassName="!font-bold  text-textColor  text-xl tracking-wide dark:text-white"
        />
      </div>

      <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
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
      <div className="lg:py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
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
      <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
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
      <div className="py-4 flex lg:flex-row xs:flex-col justify-between gap-5">
        <div className="flex w-full items-center gap-3">
          <img src={Credit} className="w-5 h-5 object-cover" />
          <Heading
            text={`3 credits`}
            variant="subHeader"
            headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
          />
          <Button
            variant="filled"
            color="secondary"
            size="normal"
            children="Buy Leads"
            buttonClassName="!px-4 py-2 text-sm tracking-wide"
          />
        </div>
        <div className="flex w-full items-center gap-3">
          <img src={Credit} className="w-5 h-5 object-cover" />
          <Heading
            text={`6 credits`}
            variant="subHeader"
            headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
          />
          <Button
            variant="filled"
            color="secondary"
            size="normal"
            children="Buy Leads"
            buttonClassName="!px-4 py-2 text-sm tracking-wide"
          />
        </div>
      </div>
      <div className=" relative w-full">
        <div className="absolute flex lg:right-0">
          <Heading
            text={`Why share this lead?`}
            variant="subHeader"
            headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
          />
          <Heading
            text={`BUY OUTRIGHT`}
            variant="subHeader"
            headingclassName="!font-normal !text-sm mx-1 text-primaryYellow tracking-wide dark:text-white"
          />
        </div>
      </div>
    </HomeCard>
  );
}

export default LeadDetails;
