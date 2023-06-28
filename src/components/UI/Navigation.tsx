import BackArrow from "../../assets/left-arrow.png";
import Heading from "./Heading";

function Navigation() {
  return (
    <div className="py-5 border-b-[0.5px] border-b-slate-300 flex justify-between lg:mx-36 xs:mx-5">
      <div className="flex gap-2 items-center">
        <img src={BackArrow} className="w-5 h-5" />
        <Heading text="Back" variant="subTitle" headingclassName="" />
      </div>
    </div>
  );
}

export default Navigation;
