import { createContext, useContext, useState } from "react";
import { BusinessData } from "../../models/home";
import useSWR from "swr";
import { fetcher } from "../home-context";

//auth response type declaration
type BusinessResponseType = {
  data?: BusinessData[];

  isLoading: boolean;
  error: string;
};

export const BusinessContext = createContext<BusinessResponseType>({
  isLoading: false,
  data: [] as BusinessData[],
  error: "",
});

const BusinessContextProvider = (props: { children: React.ReactNode }) => {
  const [url, setUrl] = useState(
    "https://erranddo.kodecreators.com/api/v1/services"
  );

  //search handler
  const searchHandler = (key: string) => {
    setUrl(`https://erranddo.kodecreators.com/api/v1/services?search=${key}`);
  };

  const dummy_data: BusinessData[] = [];
  let datarender: BusinessData[] = [];
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  return (
    <BusinessContext.Provider
      value={{
        data: data,
        isLoading: isLoading,

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
