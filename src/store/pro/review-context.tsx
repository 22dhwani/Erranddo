import React, { useState, useContext } from "react";
import { createContext } from "react";
import { AddResponseData, ReviewData } from "../../models/customer/reviewlist";
import useSWR from "swr";
import { fetcher } from "../customer/home-context";

type ReviewResponseType = {
  data?: ReviewData[];
  getBusinessReviews: (id?: number) => void;
  addResponse: (formData: FormData, id: string) => void;
  isLoading: boolean;
  error: string;
};

export const ReviewContext = createContext<ReviewResponseType>({
  data: [] as ReviewData[],
  getBusinessReviews: (d) => {
    console.log(d);
  },
  addResponse: (formData: FormData, id: string) => console.log(id, formData),
  isLoading: false,
  error: "",
});

const ReviewContextProProvider = (props: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [url, setUrl] = useState(
    `https://erranddo.kodecreators.com/api/v1/reviews/`
  );
  const getBusinessReviews = (id?: number) => {
    setUrl(
      `https://erranddo.kodecreators.com/api/v1/reviews?user_business_id=${id}`
    );
  };
  const dummy_data: ReviewData[] = [];
  let datarender: ReviewData[] = [];
  const { data, isLoading: isReviewLoading, mutate } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;

  //add business
  const AddResponse = async (formData: FormData, id: string) => {
    console.log(id);
    const token = localStorage.getItem("token");
    setIsLoading(true);
    setError("");
    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/reviews/${id}/addresponse`,
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
      const data: AddResponseData = await res.json();

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
  return (
    <ReviewContext.Provider
      value={{
        data: datarender,
        getBusinessReviews: getBusinessReviews,
        addResponse: AddResponse,
        isLoading: isReviewLoading,
        error: error,
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export function useReview() {
  const reviewCtx = useContext(ReviewContext);
  return reviewCtx;
}
export default ReviewContextProProvider;
