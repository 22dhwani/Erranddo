import { useNavigate } from "react-router";
import BackArrow from "../../assets/BackArrow";
import { useTheme } from "../../store/theme-context";
import Button from "./Button";
import Heading from "./Heading";

function Navigation(props: { isButton: boolean }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="py-4 border-b-[0.5px] border-b-slate-300 flex justify-between ">
      <div className="flex gap-2 items-center" onClick={() => navigate(-1)}>
        {theme === "light" && <div children={<BackArrow color="black" />} />}

        {theme === "dark" && <div children={<BackArrow color="white" />} />}
        <Heading
          text="Back"
          variant="smallTitle"
          headingclassName="text-textColor !font-semibold tracking-wide dark:text-darktextColor"
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
