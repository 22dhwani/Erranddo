import { createContext, useContext, useState } from "react";
import { BusinessData } from "../../models/home";
import useSWR, { mutate } from "swr";
import { fetcher } from "../customer/home-context";
import {
  AddBusinessData,
  Business,
  BusinessDetail,
} from "../../models/pro/business";
import { toast } from "react-toastify";

//auth response type declaration
type BusinessResponseType = {
  data?: BusinessData[];
  isBussinessLoading: boolean;
  addBusiness: (formData: FormData) => void;
  addServiceBusiness: (formData: FormData) => void;
  businessDetail?: Business;
  isBussinessDetailLoading: boolean;
  detailBusiness: (id?: number) => void;

  editServiceBusiness: (formData: FormData, serviceId: number) => void;
  isLoading: boolean;
  error: string;
};

export const BusinessContext = createContext<BusinessResponseType>({
  isLoading: false,
  isBussinessLoading: false,
  isBussinessDetailLoading: false,
  addBusiness: (data) => {
    console.log(data);
  },
  addServiceBusiness: (data) => {
    console.log(data);
  },
  editServiceBusiness: (data) => {
    console.log(data);
  },
  data: [] as BusinessData[],
  businessDetail: {} as Business,
  detailBusiness: (data) => {
    console.log(data);
  },
  error: "",
});

const BusinessContextProvider = (props: { children: React.ReactNode }) => {
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [businessDetailUrl, setBusinessDetailUrl] = useState("");
  const url = `https://erranddo.kodecreators.com/api/v1/businesses?user_id=${id}`;

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
      setIsLoading(false);

      const data: any = await res.json();
      setError(data.message);
    }
  };

  //detail  business

  const DetailBusiness = async (id?: number) => {
    setBusinessDetailUrl(
      `https://erranddo.kodecreators.com/api/v1/businesses/${id}/detail`
    );
  };

  const dummy_detail_data: Business = {} as Business;
  let businessData: Business = {} as Business;
  const { data: businessDetailData, isLoading: isBusinessDetailLoading } =
    useSWR(businessDetailUrl, fetcher);
  businessData = businessDetailData?.data || dummy_detail_data;

  //edit service business
  const EditServiceBusiness = async (formData: FormData, serviceId: number) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    setError("");
    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/business-services/${serviceId}/edit`,
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
        businessDetail: businessData,
        isLoading: isLoading,
        addBusiness: AddBusiness,
        detailBusiness: DetailBusiness,
        addServiceBusiness: AddServiceBusiness,
        editServiceBusiness: EditServiceBusiness,
        isBussinessLoading: isBusinessLoading,
        isBussinessDetailLoading: isBusinessDetailLoading,
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
