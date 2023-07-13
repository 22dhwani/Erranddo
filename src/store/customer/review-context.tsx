import React, { useState, useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewData } from "../../models/customer/reviewlist";
import useSWR from "swr";
import { fetcher } from "./home-context";
//auth response type declaration
type ReviewResponseType = {
  data?: ReviewData[];
  createReview: (formData: FormData) => void;
  isLoading: boolean;
  error: string;
};

//auth context initialization
export const ReviewContext = createContext<ReviewResponseType>({
  createReview: (d) => {
    console.log(d);
  },
  isLoading: false,
  error: "",
});

const ReviewContextProvider = (props: { children: React.ReactNode }) => {
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const createReview = async (formData: FormData) => {
    const token = await JSON.parse(localStorage.getItem("token") ?? "{}").token;
    setError("");
    setIsLoading(true);

    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/reviews/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    if (res.status === 200) {
      setError("");
      setTimeout(() => {
        setIsLoading(false);
      });
      const data: any = await res.json();
      if (data.status === "1") {
        // toast.success("Email has been successfully sent !");
      } else {
        setError(data.message);
        // toast.error(data.error);
      }
    } else {
      const data: any = await res.json();
      setError(data.message);
      setIsLoading(false);
      // toast.error(data.message);
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        createReview: createReview,
        isLoading: isLoading,
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
export default ReviewContextProvider;
