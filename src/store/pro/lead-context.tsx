import React, { useState, useContext } from "react";
import { createContext } from "react";
import useSWR from "swr";
import { fetcher } from "../customer/home-context";
import { BusinessData } from "../../models/home";
import { ServiceData } from "../../models/pro/business";
import { LeadsList } from "../../models/pro/leadslist";
import { UserRequestList } from "../../models/pro/userrequestlist";

type LeadResponeType = {
  leads?: UserRequestList[];
  business: BusinessData[];
  service: ServiceData[];
  isLoading: boolean;
  error: string;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  filter: (ids: number[]) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const LeadContext = createContext<LeadResponeType>({
  leads: [] as UserRequestList[],
  business: [] as BusinessData[],
  service: [] as ServiceData[],
  isLoading: false,
  error: "",
  handleNextPage: () => {
    console.log();
  },
  handlePrevPage: () => {
    console.log();
  },
  filter: (ids) => {
    console.log();
  },
  page: 0,
  setPage: () => {
    console.log();
  },
});

const LeadContextProProvider = (props: { children: React.ReactNode }) => {
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [error, setError] = useState("");
  const perPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/user-requests?for_pro=1&page=${currentPage}&per_page=${perPage}`
  );

  let baseUrl = "";

  const filter = (ids: number[]) => {
    baseUrl = `https://erranddo.kodecreators.com/api/v1/user-requests?for_pro=1&page=${1}&per_page=${perPage}&`;
    const queryParams = ids
      .map((id, key) => `service_ids[${key}]=${id}`)
      .join("&");
    const url = `${baseUrl}?${queryParams}`;
    setUrl(url);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setUrl((prev) => prev + `page=${currentPage + 1}&per_page=${perPage}`);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setUrl((prev) => prev + `page=${currentPage - 1}&per_page=${perPage}`);
    }
  };
  const dummy_data: UserRequestList[] = [];
  let datarender: UserRequestList[] = [];
  const { data, isLoading: isRequestLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  //business
  const businessurl = `https://erranddo.kodecreators.com/api/v1/businesses?user_id=${id}`;
  const dummy_business: BusinessData[] = [];
  let datarenderOfBusiness: BusinessData[] = [];
  const { data: businessData } = useSWR(businessurl, fetcher);
  datarenderOfBusiness = businessData?.data || dummy_business;

  //service
  const serviceurl = `https://erranddo.kodecreators.com/api/v1/business-services?user_id=${id}}`;
  const dummy_service: ServiceData[] = [];
  let datarenderOfService: ServiceData[] = [];
  const { data: serviceData } = useSWR(serviceurl, fetcher);
  datarenderOfService = serviceData?.data || dummy_service;
  return (
    <LeadContext.Provider
      value={{
        leads: datarender,
        business: datarenderOfBusiness,
        service: datarenderOfService,
        isLoading: isRequestLoading,
        handleNextPage: handleNextPage,
        handlePrevPage: handlePreviousPage,
        filter: filter,
        error: error,
        page: currentPage,
        setPage: setCurrentPage,
      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export function useLead() {
  const reviewCtx = useContext(LeadContext);
  return reviewCtx;
}
export default LeadContextProProvider;
