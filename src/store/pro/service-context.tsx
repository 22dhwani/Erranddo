import { createContext, useContext, useState } from "react";
import { BusinessData } from "../../models/home";
import useSWR, { mutate } from "swr";
import { fetcher } from "../customer/home-context";
import {
  AddBusinessData,
  ServiceData,
  ServiceList,
} from "../../models/pro/business";
import { toast } from "react-toastify";

//auth response type declaration
type ServiceResponseType = {
  data?: ServiceData[];
  isServiceLoading: boolean;
  addBusiness: (formData: FormData) => void;
  isLoading: boolean;
  error: string;
};

export const ServiceContext = createContext<ServiceResponseType>({
  isLoading: false,
  isServiceLoading: false,
  addBusiness: (data) => {
    console.log(data);
  },
  data: [] as ServiceData[],
  error: "",
});

const ServiceContextProvider = (props: { children: React.ReactNode }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/business-services?page=1&per_page=10`
  );

  const dummy_data: ServiceData[] = [];
  let datarender: ServiceData[] = [];
  const { data, mutate, isLoading: isServiceLoading } = useSWR(url, fetcher);
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
  return (
    <ServiceContext.Provider
      value={{
        data: datarender,
        isLoading: isLoading,
        addBusiness: AddBusiness,
        isServiceLoading: isServiceLoading,
        error: error,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceContextProvider;

export function useService() {
  const homeCtx = useContext(ServiceContext);
  return homeCtx;
}
