import React, { useState, useContext } from "react";
import { createContext } from "react";
import useSWR, { mutate } from "swr";
import { fetcher } from "../customer/home-context";
import { BusinessData } from "../../models/home";
import { ServiceData } from "../../models/pro/business";
import { LeadsList } from "../../models/pro/leadslist";
import { UserRequestList } from "../../models/pro/userrequestlist";
import { toast } from "react-toastify";

type LeadResponeType = {
  leads?: UserRequestList[];
  business: BusinessData[];
  service: ServiceData[];
  buyLead: (formData: FormData) => Promise<void>;
  isLoading: boolean;
  error: string;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  filter: (ids: number[]) => void;
  filterByInterest: (id: boolean) => void;

  page: number;
  total: number;

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
  buyLead: async () => {
    console.log();
  },
  filter: (ids) => {
    console.log();
  },
  filterByInterest: (id) => {
    console.log();
  },
  page: 0,
  setPage: () => {
    console.log();
  },
  total: 0,
});

const base = "https://erranddo.kodecreators.com/api/v1/user-requests?for_pro=1";

const LeadContextProProvider = (props: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [error, setError] = useState("");
  const perPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/user-requests?for_pro=1&page=${currentPage}&per_page=${perPage}`
  );

  // let baseUrl = "";
  const filterByInterest = (is_interest_shown: boolean) => {
    if (is_interest_shown) {
      const params = new URLSearchParams(url);

      params.set("interests", `${1}`);
      setUrl(decodeURIComponent(params.toString()));
    } else {
      const params = new URLSearchParams(url);
      params.delete("interests");

      setUrl(decodeURIComponent(params.toString()));
    }
  };
  const filter = (ids: number[]) => {
    const params = new URLSearchParams(url);
    params.set("page", `${1}`);
    params.set("per_page", `${perPage}`);
    ids.forEach((id, i) => {
      params.set(`service_ids[${i}]`, `${id}`);
    });
    setUrl(decodeURIComponent(params.toString()));
  };

  const handleNextPage = () => {
    setCurrentPage((c) => c + 1);
    const params = new URLSearchParams(url);
    params.set("page", `${currentPage + 1}`);
    params.set("per_page", `${perPage}`);
    setUrl(decodeURIComponent(params.toString()));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const params = new URLSearchParams(url);
      params.set("page", `${currentPage - 1}`);
      params.set("per_page", `${perPage}`);
      setUrl(url);
    }
  };
  const dummy_data: UserRequestList[] = [];
  let datarender: UserRequestList[] = [];
  const { data, isLoading: isRequestLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;
  const total = data?.total;

  //

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

  //addLead
  const buyLead = async (formData: FormData) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    setError("");
    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/user-requests/show-interest`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    if (res.status === 200) {
      setIsLoading(false);

      if (data.status === "1") {
        toast.success("Lead Bought successfully !", {
          hideProgressBar: false,
          position: "bottom-left",
        });
      } else {
        setError("");
        toast.error(data.message, {
          hideProgressBar: false,
          position: "bottom-left",
        });
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
      toast.error(data.message, {
        hideProgressBar: false,
        position: "bottom-left",
      });
    }
  };

  return (
    <LeadContext.Provider
      value={{
        leads: datarender,
        business: datarenderOfBusiness,
        service: datarenderOfService,
        isLoading: isRequestLoading,
        buyLead: buyLead,
        handleNextPage: handleNextPage,
        handlePrevPage: handlePreviousPage,
        filter: filter,
        filterByInterest: filterByInterest,
        error: error,
        page: currentPage,
        total: total,
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
