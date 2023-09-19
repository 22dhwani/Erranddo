import React, { useEffect } from "react";
import NotificationMainPagePro from "../../components/pro/notifications/NotificationMainPagePro";
import { useNotification } from "../../store/customer/notification-context";

function NotificationPro() {
  const { setUrl } = useNotification();
  const userId = JSON.parse(localStorage.getItem("data") ?? "").id;
  const role = localStorage.getItem("role");
  useEffect(() => {
    setUrl(
      `https://erranddo.kodecreators.com/api/v1/notification?user_id=${userId}&is_for_${role}=1`
    );
  }, []);
  return (
    <div>
      <NotificationMainPagePro />
    </div>
  );
}

export default NotificationPro;
