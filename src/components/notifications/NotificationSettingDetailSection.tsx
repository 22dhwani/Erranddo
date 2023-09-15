import { useAuth } from "../../store/customer/auth-context";
import NotificationSetting from "./NotificationSetting";
import NotificationSettingHeading from "./NotificationSettingHeading";

function NotificationSettingDetailSection() {
  const { userData, isDetailLoading } = useAuth();

  return (
    <div>
      <NotificationSettingHeading />
      {!isDetailLoading && (
        <NotificationSetting
          appStatus={
            userData?.metadata?.is_app_request_creation_notification_on == 1
              ? true
              : false
          }
          emailStatus={
            userData?.metadata?.is_app_request_creation_notification_on == 1
              ? true
              : false
          }
          question={"When a request has been created or close"}
          appKey="is_app_request_creation_notification_on"
          emailKey="is_email_request_creation_notification_on"
        />
      )}
      {/* <NotificationSetting
        appStatus={
          userData?.metadata?.is_app_recieved_quote_notification_on == 1
            ? true
            : false
        }
        emailStatus={
          userData?.metadata?.is_email_recieved_quote_notification_on == 1
            ? true
            : false
        }
        question={"When I receive a message or quote"}
        appKey="is_app_recieved_quote_notification_on"
        emailKey="is_email_recieved_quote_notification_on"
      />

      <NotificationSetting
        appStatus={
          userData?.metadata?.is_app_promotion_mail_notification_on == 1
            ? true
            : false
        }
        emailStatus={
          userData?.metadata?.is_email_promotion_mail_notification_on == 1
            ? true
            : false
        }
        question={"Occasional promotional emails"}
        appKey="is_app_promotion_mail_notification_on"
        emailKey="is_email_promotion_mail_notification_on"
      /> */}
    </div>
  );
}

export default NotificationSettingDetailSection;
