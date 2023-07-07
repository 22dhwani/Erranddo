import SettingsCard from "../SettingsCardPro";
import UserImage from "../../../../assets/user-image-big.png";
import Button from "../../../UI/Button";
import PersonalInfoFormPro from "./PersonalInfoFormPro";
import { useState } from "react";
import ProfileImageModal from "../../../../layout/home/ProfileImageModal";
import useSWR from "swr";
import { fetcher } from "../../../../store/home-context";
import { UserData } from "../../../../models/user";

function PersonalInfoPro() {
  const [profileModal, setProfileModal] = useState(false);
  const token = localStorage.getItem("data");
  let userData: any;
  if (token) {
    userData = JSON.parse(token);
  }

  const url = `https://erranddo.kodecreators.com/api/v1/user/detail?user_id=${userData?.id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const profileData: UserData = data?.data ?? "";
  return (
    <>
      {profileModal && (
        <ProfileImageModal
          onCancel={() => {
            setProfileModal(false);
          }}
        />
      )}
      <SettingsCard>
        <div className="flex items-center lg:gap-10 xs:gap-5">
          <img
            src={`https://erranddo.kodecreators.com/storage/${profileData?.img_avatar}`}
            className="lg:w-44 xs:w-24 object-cover object-center"
          />
          <div className="flex flex-col gap-3">
            <Button
              variant="filled"
              color="primary"
              size="normal"
              children="Upload New Picture"
              buttonClassName="!px-6 !py-3 text-sm tracking-wide "
              onClick={() => setProfileModal(true)}
            />
            <Button
              variant="ghost"
              color="error"
              size="normal"
              children="Delete"
              buttonClassName="!px-6 !py-3 text-sm tracking-wider border-slate-500"
              centerClassName="flex justify-center items-center"
            />
          </div>
        </div>
        <PersonalInfoFormPro />
      </SettingsCard>
    </>
  );
}

export default PersonalInfoPro;
