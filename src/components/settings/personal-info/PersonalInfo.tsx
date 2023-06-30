import SettingsCard from "../SettingsCard";
import UserImage from "../../../assets/user-image-big.png";
import Button from "../../UI/Button";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo() {
  return (
    <SettingsCard>
      <div className="flex items-center gap-10">
        <img src={UserImage} className="w-44 object-cover object-center" />
        <div className="flex flex-col gap-3">
          <Button
            variant="filled"
            color="primary"
            size="normal"
            children="Upload New Picture"
            buttonClassName="!px-6 !py-3 text-sm tracking-wide "
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
      <PersonalInfoForm />
    </SettingsCard>
  );
}

export default PersonalInfo;
