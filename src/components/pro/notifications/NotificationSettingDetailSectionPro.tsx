import NotificationSettingPro from "./NotificationSettingPro";
import NotificationSettingHeadingPro from "./NotificationSettingHeadingPro";

function NotificationSettingDetailSectionPro() {
  return (
    <div>
      <NotificationSettingHeadingPro />
      <NotificationSettingPro
        question={"When a new lead is posted that matches my niche "}
      />
      <NotificationSettingPro question={"When a customer requests a quote"} />
      <NotificationSettingPro question={"When a review has been received "} />
      <NotificationSettingPro question={"When a customer sends a message"} />
      <NotificationSettingPro
        question={"When a customer closes a request I have purchased "}
      />
      <NotificationSettingPro question={"Occasional promotional emails"} />
    </div>
  );
}

export default NotificationSettingDetailSectionPro;
