import ErrandoLogo from "../../../assets/Group 1@3x.png";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import DownArrow from "../../../assets/DownArrow.svg";
import UserImage from "../../../assets/user-image.png";
import { useTheme } from "../../../store/theme-context";
import Theme from "../../../assets/Theme";
import Warning from "../../../assets/Warning";
import Settings from "../../../assets/Settings";

function TopBar() {
  const { theme, changeTheme } = useTheme();
  console.log(theme);
  const topbarClassName =
    "bg-white dark:bg-mediumGray fixed top-0 py-4 xl:px-36 lg:px-24 xs:px-5 flex shadow-md justify-between w-screen items-center lg:h-[9.651474530831099vh] xs:h-[9.051474530831099vh] z-[100]";
  return (
    <div className={topbarClassName}>
      <div className=" my-1 xs:w-3/6 lg:w-max">
        <img src={ErrandoLogo} className="lg:w-80 xs:w-full object-contain" />
      </div>
      <div className=" md:gap-3  xs:gap-3 flex  ml-auto items-center">
        <Button
          variant="filled"
          color="primary"
          size="normal"
          children="New Request"
          buttonClassName="!px-7 text-sm xs:hidden lg:flex"
        />
        <div className="hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full h-7 w-7 flex items-center justify-center">
          {theme === "light" && (
            <button
              onClick={() => {
                changeTheme("light");
              }}
            >
              <div children={<Theme color="black" />} />
            </button>
          )}

          {theme === "dark" && (
            <button
              onClick={() => {
                changeTheme("dark");
              }}
            >
              <div children={<Theme color="white" />} />
            </button>
          )}
        </div>
        <div className="hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full h-7 w-7 flex items-center justify-center">
          {theme === "light" && <div children={<Warning color="black" />} />}

          {theme === "dark" && <div children={<Warning color="white" />} />}
        </div>
        <div className="hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full h-7 w-7 flex items-center justify-center">
          {theme === "light" && <div children={<Settings color="black" />} />}

          {theme === "dark" && <div children={<Settings color="white" />} />}
        </div>
        <div className="flex items-center ml-auto gap-2  cursor-pointer">
          <div className="flex items-center gap-2">
            <img src={UserImage} className="object-contain w-10" />
            <div className="flex flex-col xs:hidden lg:inline gap-2 w-full ">
              <Heading
                variant="subHeader"
                text="Peter James"
                headingclassName="text-textColor w-full dark:text-darktextColor"
              />
            </div>
          </div>
          <Button
            variant="outlined"
            buttonClassName="border-none  !py-2 !px-2 !text-textColor xs:hidden lg:inline  font-semibold rounded-full text-md font-sans"
          >
            <img src={DownArrow} className="w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
