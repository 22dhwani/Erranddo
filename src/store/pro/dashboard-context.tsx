import { createContext, useContext, useState } from "react";
import { BusinessData } from "../../models/home";
import useSWR, { mutate } from "swr";
import { fetcher } from "../customer/home-context";
import { AddBusinessData } from "../../models/pro/business";
import { toast } from "react-toastify";

//auth response type declaration
type BusinessResponseType = {
  data?: BusinessData[];
  isBussinessLoading: boolean;
  addBusiness: (formData: FormData) => void;
  addServiceBusiness: (formData: FormData) => void;

  isLoading: boolean;
  error: string;
};

export const BusinessContext = createContext<BusinessResponseType>({
  isLoading: false,
  isBussinessLoading: false,
  addBusiness: (data) => {
    console.log(data);
  },
  addServiceBusiness: (data) => {
    console.log(data);
  },
  data: [] as BusinessData[],
  error: "",
});

const BusinessContextProvider = (props: { children: React.ReactNode }) => {
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&user_id=${id}`
  );

  const dummy_data: BusinessData[] = [];
  let datarender: BusinessData[] = [];
  const {
    data,

    mutate,
    isLoading: isBusinessLoading,
  } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  //add business
  const AddBusiness = async (formData: FormData) => {
    console.log(...formData);
    const token = localStorage.getItem("token");
    setIsLoading(true);
    setError("");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/businesses/create",
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
      const data: AddBusinessData = await res.json();

      if (data.status === "0") {
        setError(data.message);
      } else {
        setError("");
        mutate();
        toast.success("Bussiness is succesffuly added ");
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
    }
  };

  //add service business
  const AddServiceBusiness = async (formData: FormData) => {
    console.log(...formData);
    const token = localStorage.getItem("token");
    setIsLoading(true);
    setError("");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/business-services/create",
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
      const data: AddBusinessData = await res.json();

      if (data.status === "0") {
        setError(data.message);
      } else {
        setError("");
        mutate();
        toast.success("Bussiness is succesffuly added ");
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
    }
  };
  return (
    <BusinessContext.Provider
      value={{
        data: datarender,
        isLoading: isLoading,
        addBusiness: AddBusiness,
        addServiceBusiness: AddServiceBusiness,
        isBussinessLoading: isBusinessLoading,
        error: error,
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessContextProvider;

export function useBusiness() {
  const homeCtx = useContext(BusinessContext);
  return homeCtx;
}
