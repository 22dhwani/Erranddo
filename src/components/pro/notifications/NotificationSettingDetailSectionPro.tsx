import NotificationSettingPro from "./NotificationSettingPro";
import NotificationSettingHeadingPro from "./NotificationSettingHeadingPro";
import { useAuthPro } from "../../../store/pro/auth-pro-context";

function NotificationSettingDetailSectionPro() {
  const { userData, isDetailLoading } = useAuthPro();

  return (
    <div>
      <NotificationSettingHeadingPro />
      {!isDetailLoading && (
        <div>
          <NotificationSettingPro
            appStatus={
              userData?.metadata?.is_app_lead_notification_on == 1
                ? true
                : false
            }
            emailStatus={
              userData?.metadata?.is_email_lead_notification_on == 1
                ? true
                : false
            }
            question={"When a new lead is posted that matches my niche "}
            appKey="is_app_lead_notification_on"
            emailKey="is_email_lead_notification_on"
          />
          <NotificationSettingPro
            appStatus={
              userData?.metadata?.is_app_request_quote_notification_on == 1
                ? true
                : false
            }
            emailStatus={
              userData?.metadata?.is_email_request_quote_notification_on == 1
                ? true
                : false
            }
            question={"When a customer requests a quote"}
            appKey="is_app_request_quote_notification_on"
            emailKey="is_email_request_quote_notification_on"
          />
          <NotificationSettingPro
            appStatus={
              userData?.metadata?.is_app_review_notification_on == 1
                ? true
                : false
            }
            emailStatus={
              userData?.metadata?.is_email_review_notification_on == 1
                ? true
                : false
            }
            question={"When a review has been received "}
            appKey="is_app_review_notification_on"
            emailKey="is_email_review_notification_on"
          />
          {/* <NotificationSettingPro
        appStatus={
          userData?.metadata?.is_ == 1 ? true : false
        }
        emailStatus={
          userData?.metadata?.is_email_lead_notification_on == 1 ? true : false
        }
        question={"When a customer sends a message"}
        appKey="is_"
        emailKey="is_email_lead_notification_on"
      /> */}
          <NotificationSettingPro
            appStatus={
              userData?.metadata?.is_app_close_request_notification_on == 1
                ? true
                : false
            }
            emailStatus={
              userData?.metadata?.is_email_close_request_notification_on == 1
                ? true
                : false
            }
            question={"When a customer closes a request I have purchased "}
            appKey="is_app_close_request_notification_on"
            emailKey="is_email_close_request_notification_on"
          />
          <NotificationSettingPro
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
          />
        </div>
      )}
    </div>
  );
}

export default NotificationSettingDetailSectionPro;
