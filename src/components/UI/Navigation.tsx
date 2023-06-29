import BackArrow from "../../assets/left-arrow.png";
import Button from "./Button";
import Heading from "./Heading";

function Navigation(props: { isButton: boolean }) {
  return (
    <div className="py-4 border-b-[0.5px] border-b-slate-300 flex justify-between ">
      <div className="flex gap-2 items-center">
        <img src={BackArrow} className="w-5 h-5" />
        <Heading
          text="Back"
          variant="smallTitle"
          headingclassName="text-slate-500 !font-semibold tracking-wide"
        />
      </div>
      <div>
        {props.isButton && (
          <Button
            variant="filled"
            color="primary"
            size="normal"
            children="New Request"
            buttonClassName="!px-4 py-2 text-sm lg:hidden "
          />
        )}
      </div>
    </div>
  );
}

export default Navigation;
