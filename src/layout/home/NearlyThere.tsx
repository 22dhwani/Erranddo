import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";
import CommentsModal from "./CommentsModal";

function NearlyThere(props: {
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  const formik = useFormik({
    initialValues: {
      postCode: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (values.postCode.toString().length === 0) {
        errors.postCode = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {
        <CommentsModal
          open={openMenu}
          onCancel={() => {
            setOpenMenu(false);
          }}
          onCancelAll={() => {
            setOpenMenu(false);
          }}
        />
      }
      {props.open && (
        <Modal
          className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px]"
          backdropClassName="bg-transparent"
        >
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancelAll();
            }}
          >
            <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
          </button>
          <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-6 gap-2">
            <div className="text-center">
              <h1 className="text-black xl:text-xl md:text-lg xs:text-lg font-bold">
                Nearly There!
              </h1>
            </div>
          </div>

          <div className="pb-10">
            <input
              className="rounded-lg xl:h-12 lg:h-10 xs:h-10 xl:w-[550px] md:w-[450px] xs:w-full outline-none pl-3 text-[#707070]"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="text-sm flex flex-row gap-3 pb-32 xl:w-[570px]">
            <input type="checkbox" />
            <div className="">
              I agree to Erranddo’s T&C's and I’m happy to receive occasional
              promotion.
            </div>
          </div>
          <div className="flex gap-5 xl:w-[550px] md:w-[450px] justify-center">
            <button
              type="button"
              onClick={() => props.onCancel()}
              className="text-black w-32 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                setOpenMenu(true);
              }}
              className="text-white w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default NearlyThere;
