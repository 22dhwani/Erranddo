import NotificationSetting from "./NotificationSetting";
import NotificationSettingHeading from "./NotificationSettingHeading";

function NotificationSettingDetailSection() {
  return (
    <div>
      <NotificationSettingHeading />

      <NotificationSetting
        question={"When a request has been created or close"}
      />
      <NotificationSetting
        question={"When I receive a message or quote        "}
      />

      <NotificationSetting question={"Occasional promotional emails"} />
    </div>
  );
}

export default NotificationSettingDetailSection;
