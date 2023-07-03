import ErranddoLogo from "../../../assets/Group 1@3x.png";
import { useNavigate } from "react-router";
import Button from "../../UI/Button";

function HomeTopBar() {
  const navigate = useNavigate();
  const topbarClassName =
    "bg-white dark:bg-black fixed top-0 py-4 xl:px-36 lg:px-24 xs:px-5 flex shadow-md justify-between w-screen items-center lg:h-[9.651474530831099vh] xl:h-[8.651474530831099vh] xs:h-[9.051474530831099vh] z-[100]";
  return (
    <div className={topbarClassName}>
      <div className="my-1 xs:w-3/6 lg:w-max">
        <button onClick={() => navigate("/home")}>
          <img
            src={ErranddoLogo}
            className="lg:w-80 xs:w-full object-contain"
          />
        </button>
      </div>
      <div className="md:flex items-center md:gap-5 xs:hidden">
        <div className="pr-5">
          <ul className="flex gap-3 flex-col mt-4 xl:text-lg md:text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:text-semibold">
            <li>
              <button
                className="text-[#707070] dark:text-white"
                onClick={() => navigate("/signup-customer")}
              >
                Sign Up
              </button>
            </li>
            <div className="xl:h-6 md:h-5 min-h-[1em] w-0.5 bg-[#707070] opacity-40"></div>
            <li>
              <button
                className="text-[#707070] dark:text-white"
                onClick={() => navigate("/sign-in")}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden xs:block md:block">
          <Button
            variant="filled"
            color="primary"
            type="button"
            buttonClassName="xs:text-xs lg:text-base rounded-lg py-2 text-center md:mr-0"
            onClick={() => navigate("/signup-pro")}
          >
            Register as a Pro
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeTopBar;
