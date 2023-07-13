import ErrandoLogo from "../../../../assets/Group 1@3x.png";
import Button from "../../../UI/Button";
import Heading from "../../../UI/Heading";
import DownArrow from "../../../../assets/DownArrow.svg";
import UserImage from "../../../../assets/user-image.png";
import { useTheme } from "../../../../store/theme-context";
import Theme from "../../../../assets/Theme";
import Warning from "../../../../assets/Warning";
import Settings from "../../../../assets/Settings";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../../../../layout/home/LogoutModal";
import TopBarMenu from "../../../pro/dashboard/top-bar/TopBarMenu";
import { UserData } from "../../../../models/user";
import useSWR from "swr";
import { fetcher } from "../../../../store/customer/home-context";
import profileAvatar from "../../../../assets/avatar.svg";

function TopBar(props: { isSettingDisabled?: boolean }) {
  const navigate = useNavigate();
  const { theme, changeTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const logoutHandler = (event: React.FormEvent) => {
    setShowLogoutModal(true);
  };

  const token = localStorage.getItem("data");
  let userData: any;
  if (token) {
    userData = JSON.parse(token);
  }
  const url = `https://erranddo.kodecreators.com/api/v1/user/detail?user_id=${userData?.id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const profileData: UserData = data?.data ?? "";
  const profilePhoto = `https://erranddo.kodecreators.com/storage/${profileData?.img_avatar}`;
  const topbarClassName =
    "bg-white dark:bg-black fixed top-0 py-4 xl:px-36 lg:px-20 xs:px-5 flex shadow-md justify-between w-screen items-center xl:h-[8.651474530831099vh] lg:h-[9.651474530831099vh] xs:h-[9.051474530831099vh] z-[100]";
  return (
    <div className={topbarClassName}>
      {openMenu && <TopBarMenu onClose={() => setOpenMenu(false)} />}

      {showLogoutModal && (
        <LogoutModal
          onCancel={() => {
            setShowLogoutModal(false);
          }}
        />
      )}
      <div className=" my-1 xs:w-3/6 lg:w-max">
        <button onClick={() => navigate("/home")}>
          <img src={ErrandoLogo} className="lg:w-80 xs:w-full object-contain" />
        </button>
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
        <NavLink to="/notifications">
          <div className="hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
            {theme === "light" && <div children={<Warning color="black" />} />}
            {theme === "dark" && <div children={<Warning color="white" />} />}
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div
            className={`  rounded-full h-7 w-7 flex items-center justify-center ${
              props.isSettingDisabled
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {theme === "light" && (
              <div
                children={
                  <Settings
                    color={`${
                      props.isSettingDisabled ? " rgb(156 163 175)" : " black"
                    } `}
                  />
                }
              />
            )}

            {theme === "dark" && (
              <div
                children={
                  <Settings
                    color={`${
                      props.isSettingDisabled ? " rgb(156 163 175)" : " white"
                    } `}
                  />
                }
              />
            )}
          </div>
        </NavLink>
        <div
          className="flex items-center ml-auto gap-2  cursor-pointer"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <div className="flex items-center gap-2">
            <button>
              <img
                src={profileData?.img_avatar ? profilePhoto : profileAvatar}
                className="object-cover bg-blue-100 dark:bg-slate-700 h-10 lg:w-16 xs:w-10 rounded-full"
              />
            </button>
            <div className="flex flex-col xs:hidden lg:inline gap-2 w-full ">
              {profileData && profileData.full_name && (
                <Heading
                  variant="subHeader"
                  text={profileData.full_name}
                  headingclassName="text-textColor w-full dark:text-darktextColor"
                />
              )}
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
