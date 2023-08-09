import { createContext, useContext, useState } from "react";
import { BusinessData } from "../../models/home";
import useSWR from "swr";
import { fetcher } from "../customer/home-context";
import { AddBusinessData, Business } from "../../models/pro/business";
import { toast } from "react-toastify";
import { useParams } from "react-router";

//auth response type declaration
type BusinessResponseType = {
  data?: BusinessData[];
  isBussinessLoading: boolean;
  addBusiness: (formData: FormData) => void;
  addServiceBusiness: (formData: FormData) => Promise<number>;
  businessDetail?: Business;
  isBussinessDetailLoading: boolean;
  detailBusiness: (id?: number) => void;
  editBusiness: (formData: FormData, serviceId: string) => void;
  setError: React.Dispatch<React.SetStateAction<string>>;
  editServiceBusiness: (formData: FormData, serviceId: number) => void;
  deleteImage: (id: number) => Promise<void>;
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
  addServiceBusiness: async (data) => {
    console.log(data);
    return 0;
  },
  editServiceBusiness: (data) => {
    console.log(data);
  },
  setError: {} as React.Dispatch<React.SetStateAction<string>>,

  editBusiness: (data) => {
    console.log(data);
  },
  data: [] as BusinessData[],
  businessDetail: {} as Business,
  detailBusiness: (data) => {
    console.log(data);
  },
  deleteImage: async (id: number) => {
    console.log(id);
  },
  error: "",
});

const BusinessContextProvider = (props: { children: React.ReactNode }) => {
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const bussinessId = useParams().id;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [businessDetailUrl, setBusinessDetailUrl] = useState("");
  const url = `https://erranddo.kodecreators.com/api/v1/businesses?user_id=${id}`;

  const dummy_data: BusinessData[] = [];
  let datarender: BusinessData[] = [];
  const { data, mutate, isLoading: isBusinessLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  //detail  business
  const DetailBusiness = async (id?: number) => {
    setBusinessDetailUrl(
      `https://erranddo.kodecreators.com/api/v1/businesses/${id}/detail`
    );
  };

  const dummy_detail_data: Business = {} as Business;
  let businessData: Business = {} as Business;
  const {
    data: businessDetailData,
    isLoading: isBusinessDetailLoading,
    mutate: businessMutate,
  } = useSWR(businessDetailUrl, fetcher);
  businessData = businessDetailData?.data || dummy_detail_data;

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
        return 0;
      } else {
        setError("");
        mutate();
        serviceMutate();
        businessMutate();
        return 1;
      }
    } else {
      setIsLoading(false);
      const data: any = await res.json();
      setError(data.message);
      return 0;
    }
  };

  //edit service business
  const EditBusiness = async (formData: FormData, businessId: string) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    console.log("herr");
    setError("");
    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/businesses/${businessId}/edit`,
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
        businessMutate();
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
    }
  };

  const serviceUrl = `https://erranddo.kodecreators.com/api/v1/business-services?user_id=${id}`;
  const { mutate: serviceMutate } = useSWR(serviceUrl, fetcher);
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
        serviceMutate();
        mutate();
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
    }
  };

  const deleteImage = async (id: number) => {
    const token = localStorage.getItem("token") ?? "{}";
    setError("");
    setIsLoading(true);
    console.log(id, "imageIdhvbnkoihugvbnkmlkjbh");

    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/businesses/${id}/delete-service-image`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      setError("");
      setIsLoading(false);

      const data: any = await res.json();
      if (data.status === "1") {
        businessMutate();
      } else {
        setError(data.message);
        // toast.error(data.error);
      }
    } else {
      const data: any = await res.json();
      setError(data.message);
      setIsLoading(false);
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
        editBusiness: EditBusiness,
        isBussinessLoading: isBusinessLoading,
        isBussinessDetailLoading: isBusinessDetailLoading,
        error: error,
        setError: setError,
        deleteImage: deleteImage,
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
