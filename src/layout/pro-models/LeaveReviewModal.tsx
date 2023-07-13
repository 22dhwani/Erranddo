import Modal from "../home/Modal";
import Close from "../../assets/close.tsx";
import { Formik, useFormik } from "formik";
import Heading from "../../components/UI/Heading";
import StarRatings from "../../components/UI/StarRatings";
import { useTheme } from "../../store/theme-context";
import { useState } from "react";
import { useLocation, useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../../store/customer/home-context.tsx";
import { ServiceList } from "../../models/customer/servicelist.ts";
import { useReview } from "../../store/customer/review-context.tsx";

function LeaveReviewModal(props: { onCancel: () => void }) {
  const dealerId = useParams();
  const url = `https://erranddo.kodecreators.com/api/v1/businesses/${dealerId?.id}/detail`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const serviceData: ServiceList = data?.data;
  console.log(serviceData, "hello");

  const { state } = useLocation();

  const [checked, setChecked] = useState(false);

  const { theme } = useTheme();
  const { createReview } = useReview();

  const formik = useFormik({
    initialValues: {
      userBusinessId: dealerId?.id,
      serviceId: state?.serviceId,
      description: "",
      rating: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (values.description) {
        errors.description = "Required";
      }
      if (values.rating) {
        errors.rating = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {props && (
        <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[470px] md:w-[370px] dark:bg-dimGray">
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancel();
            }}
          >
            {theme === "light" && <div children={<Close color="black" />} />}

            {theme === "dark" && <div children={<Close color="white" />} />}
          </button>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center xl:w-[450px] md:w-[350px] xl:mt-1 md:mt-2 p-3 gap-2">
              <div className="flex flex-col items-center xl:w-[450px] md:w-[300px] xl:mt-1 md:mt-2 p-6 gap-2">
                <div className="text-center">
                  <Heading
                    variant="bigTitle"
                    text={`Leave ${serviceData?.name} a review`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 xl:w-[450px] justify-center items-center xs:w-[350px]">
                <StarRatings
                  onClick={(key: number) => {
                    console.log(key);
                  }}
                />
              </div>
              <div className="pb-7 xs:w-full xl:pl-0 md:pl-3">
                <Heading
                  variant="headingTitle"
                  text={state?.serviceName}
                  headingclassName="xs:text-md text-center"
                />
              </div>
              <div className=" xs:w-full xl:pl-0 md:pl-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Write Your Review here
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formik.values.description}
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <div className="flex pb-5 xs:w-full xl:pl-0 md:pl-3 justify-center items-center gap-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <Heading
                  variant="smallTitle"
                  text="I confirm the information above is accurate"
                  headingclassName="text-slate-500 text-center xs:text-xs"
                />
              </div>
              <div className="flex gap-5 xl:w-[450px] md:w-[350px] justify-around md:pl-0 xs:pl-4">
                <button
                  type="button"
                  onClick={() => {
                    props.onCancel();
                  }}
                  className="text-black dark:text-white w-36 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
                >
                  Back
                </button>
                <button
                  type="submit"
                  className=" text-white w-36 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-2 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}

export default LeaveReviewModal;
