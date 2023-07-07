import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import ProfileImage from "../../../assets/service-image-one.png";
import GreenTick from "../../../assets/GreenTick.svg";
import GreenRoundTick from "../../../assets/GreenRoundTick.svg";
import BlackRoundTick from "../../../assets/BlackRoundTick.svg";

function MyLeads() {
  return (
    <HomeCard className="rounded-md  px-5 pb-5">
      <div className="py-4 border-b-[0.5px] border-b-slate-200">
        <Heading
          text={`My Leads`}
          variant="subHeader"
          headingclassName="!font-bold  text-textColor  text-xl tracking-wide dark:text-white"
        />
      </div>
      <div className="flex justify-between py-4 border-b-[0.5px] border-b-slate-200 ">
        <div className="flex items-center gap-2">
          <img src={ProfileImage} className="" />
          <div className="flex flex-col">
            <Heading
              text={"TV Guru Limited"}
              variant="subTitle"
              headingclassName="!font-semibold  !text-lg mx-1 tracking-wide dark:text-white "
            />
            <Heading
              text={`TV Wall Mounting`}
              variant="subHeader"
              headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
            />
          </div>
        </div>
        <Heading
          text={`Posted 10min ago`}
          variant="subHeader"
          headingclassName="!font-medium !text-sm mt-2 text-primaryBlue tracking-wide dark:text-white"
        />
      </div>
      <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
        <div>
          <Heading
            text={"Name"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />
          <Heading
            text={`Pter James`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
        <div>
          <Heading
            text={"Location"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />
          <Heading
            text={`London, SE18`}
            variant="subHeader"
            headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
          />
        </div>
      </div>
      <div className="lg:py-4 grid lg:grid-cols-2 border-b-[0.5px] border-b-slate-200 xs:gap-3 lg:gap-0 xs:pb-4 lg:pb-4">
        <div>
          <Heading
            text={"Tel"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />
          <div className="flex gap-3">
            <Heading
              text={`094*****23*`}
              variant="subHeader"
              headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
            />
            <img src={GreenTick} />
          </div>
        </div>
        <div>
          <Heading
            text={"Email"}
            variant="subTitle"
            headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
          />
          <div className="flex gap-3">
            <Heading
              text={`dhwan*****@.com`}
              variant="subHeader"
              headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
            />
            <img src={GreenTick} />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Heading
          text={`Only 4 Pro’s can reply to this lead`}
          variant="subHeader"
          headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
        />
        <div className="flex gap-2 my-1 ml-1">
          <img src={GreenRoundTick} />
          <img src={GreenRoundTick} />
          <img src={BlackRoundTick} />
          <img src={BlackRoundTick} />
        </div>
      </div>
    </HomeCard>
  );
}

export default MyLeads;
