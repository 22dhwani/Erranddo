import NotificationSetting from "./NotificationSetting";
import NotificationSettingHeading from "./NotificationSettingHeading";

function NotificationSettingDetailSection() {
  return (
    <div>
      <NotificationSettingHeading />
      <NotificationSetting
        question={"When a new lead is posted that matches my niche "}
      />
      <NotificationSetting question={"When a customer requests a quote"} />
      <NotificationSetting question={"When a review has been received "} />
      <NotificationSetting question={"When a customer sends a message"} />
      <NotificationSetting
        question={"When a customer closes a request I have purchased "}
      />
      <NotificationSetting question={"Occasional promotional emails"} />
    </div>
  );
}

export default NotificationSettingDetailSection;
