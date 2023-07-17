import React, { useState, useContext } from "react";
import { createContext } from "react";
import { ReviewData } from "../../models/customer/reviewlist";
import useSWR from "swr";
import { fetcher } from "../customer/home-context";

type ReviewResponseType = {
  data?: ReviewData[];
  getBusinessReviews: (id?: number) => void;

  isLoading: boolean;
  error: string;
};

export const ReviewContext = createContext<ReviewResponseType>({
  data: [] as ReviewData[],
  getBusinessReviews: (d) => {
    console.log(d);
  },
  isLoading: false,
  error: "",
});

const ReviewContextProProvider = (props: { children: React.ReactNode }) => {
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
  const { data, isLoading: isReviewLoading } = useSWR(url, fetcher);
  datarender = data?.data || dummy_data;
  return (
    <ReviewContext.Provider
      value={{
        data: datarender,
        getBusinessReviews: getBusinessReviews,
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
