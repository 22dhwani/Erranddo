import React, { ReactNode, useContext, useState } from "react";

import useSWR from "swr";
import { fetcher } from "./home-context";
import { Business, Service } from "../../models/customer/businesslist";

type ServiceDetailsType = {
  datarender: Business[];
  businessListHandler: (key: number, requestId: string) => Promise<void>;
  sortHandler: (orderBy: string, key: number) => Promise<void>;
  isLoading: boolean;
  handleShowInterest: (formData: FormData) => void;
};

export const ServiceContext = React.createContext<ServiceDetailsType>({
  datarender: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  businessListHandler: async (key: number, requestId: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sortHandler: async (orderBy: string, key: number) => {},
  isLoading: true,
  handleShowInterest: (d) => {
    console.log(d);
  },
});

const ServiceContextProvider = (props: { children: ReactNode }) => {
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=100`
  );
  const businessListHandler = async (key: number, requestId: string) => {
    setUrl(
      `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${key}&user_request_id=${requestId}`
    );
  };
  //sort handler
  const sortHandler = async (orderBy: string, key: number) => {
    if (orderBy === "reviews_avg_rating") {
      setUrl(
        `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${key}&sort_field=reviews_avg_rating&sort_order=desc`
      );
    } else if (orderBy === "created_at") {
      setUrl(
        `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&service_id=${key}&sort_field=created_at&sort_order=desc`
      );
    }
  };

  const dummy_data: Business[] = [];
  let datarender: Business[] = [];
  const { data, isLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleShowInterest = async (formData: FormData) => {
    const token = (await localStorage.getItem("token")) ?? "{}";

    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://erranddo.kodecreators.com/api/v1/user-requests/showinterest",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Response data:", data);

      if (res.status === 200) {
        setError("");
        setIsLoading(false);
        if (data.status === "1") {
          console.log("hi");
        } else {
          setError(data.message);
        }
      } else {
        setError(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error, "ygh98yg");
      setError("Failed to show interest.");
      setIsLoading(false);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        datarender: datarender,
        businessListHandler: businessListHandler,
        handleShowInterest: handleShowInterest,
        sortHandler: sortHandler,
        isLoading: isLoading,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export function useServices() {
  const homeCtx = useContext(ServiceContext);
  return homeCtx;
}

export default ServiceContextProvider;
