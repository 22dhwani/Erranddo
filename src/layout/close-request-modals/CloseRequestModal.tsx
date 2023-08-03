import { useState } from "react";
import Modal from "../home/Modal";
import Close from "../../assets/close.tsx";

import Heading from "../../components/UI/Heading";

import CostModal from "./CostModal";
import { useTheme } from "../../store/theme-context";
import { useParams } from "react-router";
import { useFormik } from "formik";
import { Business } from "../../models/customer/businesslist.ts";
import useSWR from "swr";
import { fetcher } from "../../store/customer/home-context.tsx";
function CloseRequestModal(props: {
  serviceId: number;
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  const [openCostModal, setOpenCostModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      businessId: "",
      closeAnswer: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const requestId = useParams();
  console.log(props?.serviceId, "asdasd");

  const url = `https://erranddo.kodecreators.com/api/v1/businesses?service_id=${props?.serviceId}&user_request_id=${requestId?.id}&only_responded=1`
  const { data, isLoading, mutate } = useSWR(url, fetcher);
  let datarender: Business[] = [];
  datarender = data?.data;

  const list = [...datarender ?? [], { name: "I’ve hired a pro out of Erranddo", id: 0 }, { name: "I’ve changed my mind and don’t need the service anymore", id: 0 }];
  const { theme } = useTheme();
  return (
    <>
      {
        <CostModal
          businessId={formik.values.businessId}
          closeAnswer={formik.values.closeAnswer}
          serviceId={props?.serviceId}
          open={openCostModal}
          onCancel={() => {
            setOpenCostModal(false);
          }}
          onCancelAll={() => {
            setOpenCostModal(false);
            props.onCancelAll();
          }}
        />
      }
      {props.open && (
        <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[470px] md:w-[370px] dark:bg-dimGray">
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancelAll();
            }}
          >
            {theme === "light" && <div children={<Close color="black" />} />}

            {theme === "dark" && <div children={<Close color="white" />} />}
          </button>
          <div className="flex flex-col items-center xl:w-[450px] md:w-[350px] xl:mt-1 md:mt-2 p-3 gap-2">

            <div className="flex flex-col items-center xl:w-[450px] md:w-[300px] xl:mt-1 md:mt-2 p-6 gap-2">
              <div className="text-center">
                <Heading variant="bigTitle" text=" Close Request" />
              </div>
            </div>
            <div className="pb-7 xs:w-full xl:pl-0 md:pl-3">
              <Heading variant="headingTitle" text="Who did you hire ?" />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-3 xl:w-[450px]  xs:w-[350px] pl-7 pb-5">
                {list.length > 0 &&
                  list.map((d) => {
                    return (
                      <div className="flex items-center gap-4">
                        <input
                          id="radio"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          onChange={() => {
                            if (d?.id) {
                              formik.setFieldValue("businessId", d?.id)
                            } else {
                              formik.setFieldValue("closeAnswer", d?.name)
                            }
                          }}
                        />
                        <label>{d.name}</label>
                      </div>
                    );
                  })}
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
                  className="text-white w-36 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-2 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setOpenCostModal(true)}
                >
                  Close Request
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default CloseRequestModal;
