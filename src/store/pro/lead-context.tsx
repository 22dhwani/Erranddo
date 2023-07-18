import React, { useState, useContext } from "react";
import { createContext } from "react";

import useSWR from "swr";
import { fetcher } from "../customer/home-context";
import { Request } from "../../models/customer/requestlist";
import { BusinessData } from "../../models/home";
import { ServiceData } from "../../models/pro/business";

type LeadResponeType = {
  leads?: Request[];
  business: BusinessData[];
  service: ServiceData[];
  isLoading: boolean;
  error: string;
};

export const LeadContext = createContext<LeadResponeType>({
  leads: [] as Request[],
  business: [] as BusinessData[],
  service: [] as ServiceData[],
  isLoading: false,
  error: "",
});

const LeadContextProProvider = (props: { children: React.ReactNode }) => {
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [error, setError] = useState("");
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/user-requests?user_id=${id}`
  );

  const dummy_data: Request[] = [];
  let datarender: Request[] = [];
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
        error: error,
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
