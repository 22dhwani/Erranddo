import React, { ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { fetcher } from "./home-context";
import { NotificationData } from "../../models/customer/notification";

type NotificationType = {
  data: NotificationData[];
  edit: (formData: FormData) => void;
  isLoading: boolean;
  isNotificationLoading: boolean;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  error: string;
};

export const NotificationContext = React.createContext<NotificationType>({
  data: [],
  edit: (formData: FormData) => {
    console.log(formData);
  },
  isLoading: false,
  isNotificationLoading: false,
  setUrl: () => {
    console.log();
  },
  error: "",
});

const NotificationContextProvider = (props: { children: ReactNode }) => {
  let userId;
  let role;
  if (localStorage.getItem("isLoggedIn") === "true") {
    userId = JSON.parse(localStorage.getItem("data") ?? "").id ?? 0;
    role = localStorage.getItem("role") ?? "";
  }
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/notification?user_id=${
      userId ?? ""
    }&is_for_${role}=1`
  );

  //list handler
  const dummy_data: NotificationData[] = [];
  let datarender: NotificationData[] = [];
  const { data, isLoading: isDataLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const edit = async (formData: FormData) => {
    setError("");

    const token = localStorage.getItem("token");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/notification/edit",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    if (res.status === 200) {
      setError("");
      setTimeout(() => {
        setIsLoading(false);
      });
      const data: any = await res.json();
      if (data.status === "1") {
        // navigate("/home");
        toast.success("Profile updated successfully !", {
          hideProgressBar: false,
          position: "bottom-left",
        });
      } else {
        toast.error(data.message, {
          hideProgressBar: false,
          position: "bottom-left",
        });
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
      toast.error("Error", {
        position: "bottom-left",
      });
    }
  };
  return (
    <NotificationContext.Provider
      value={{
        data: datarender,
        edit: edit,
        setUrl: setUrl,
        isLoading: isLoading,
        isNotificationLoading: isDataLoading,
        error: error,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  const reviewCtx = useContext(NotificationContext);
  return reviewCtx;
}
export default NotificationContextProvider;
