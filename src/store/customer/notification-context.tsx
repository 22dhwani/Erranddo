import React, { ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { fetcher } from "./home-context";
import { NotificationList } from "../../models/customer/notification";

type NotificationType = {
  data: Notification[];
  edit: (formData: FormData) => void;
  isLoading: boolean;
  error: string;
};

export const NotificationContext = React.createContext<NotificationType>({
  data: [],
  edit: (formData: FormData) => {
    console.log(formData);
  },
  isLoading: false,
  error: "",
});

const NotificationContextProvider = (props: { children: ReactNode }) => {
  const userId = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/notification?user_id=${userId}`
  );

  //list handler
  const dummy_data: Notification[] = [];
  let datarender: Notification[] = [];
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
        isLoading: isLoading,
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
