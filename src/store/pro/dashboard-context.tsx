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
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/businesses?page=1&per_page=10&user_id=${id}`
  );

  const dummy_data: BusinessData[] = [];
  let datarender: BusinessData[] = [];
  const { data, error, isLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  return (
    <BusinessContext.Provider
      value={{
        data: datarender,
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
