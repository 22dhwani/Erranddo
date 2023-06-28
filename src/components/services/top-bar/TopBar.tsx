import ErrandoLogo from "../../../assets/Group 1@3x.png";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import DownArrow from "../../../assets/DownArrow.svg";
import UserImage from "../../../assets/user-image.png";
import Settings from "../../../assets/settings.png";
import Warning from "../../../assets/warning.png";

import Theme from "../../../assets/theme.png";

function TopBar() {
  const topbarClassName =
    "bg-white fixed top-0 py-4 lg:px-36 xs:px-5 flex shadow-md justify-between w-screen items-center lg:h-[9.651474530831099vh] xs:h-[9.051474530831099vh]";
  return (
    <div className={topbarClassName}>
      <div className=" my-1 xs:w-3/6 lg:w-max">
        <img src={ErrandoLogo} className="lg:w-80 xs:w-full object-contain" />
      </div>
      <div className=" md:gap-5  xs:gap-3 flex  ml-auto items-center">
        <Button
          variant="filled"
          color="primary"
          size="normal"
          children="New Request"
          buttonClassName="!px-7 text-sm xs:hidden lg:flex"
        />
        <div>
          <img src={Theme} className="w-5 h-5" />
        </div>
        <div>
          <img src={Warning} className="w-5 h-5" />
        </div>
        <div>
          <img src={Settings} className="w-5 h-5" />
        </div>
        <div className="flex items-center ml-auto gap-2  cursor-pointer">
          <img src={UserImage} className="object-contain w-10" />
          <div className="flex flex-col xs:hidden lg:inline gap-2 w-full ">
            <Heading
              variant="subHeader"
              text="Peter James"
              headingclassName="text-textColor !font-bold w-full"
            />
          </div>
          <Button
            variant="outlined"
            buttonClassName="border-none !py-2 !px-2 !text-textColor xs:hidden lg:inline  font-semibold rounded-full text-md font-sans"
          >
            <img src={DownArrow} className="w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
