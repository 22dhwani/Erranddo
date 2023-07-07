import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";
import upload from "../../assets/Upload.svg";
import ConfirmServiceModal from "./ConfirmServiceModal";
function CommentsModal(props: {
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
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {
        <ConfirmServiceModal
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
          }}
          onCancelAll={() => {
            setOpenModal(false);
            props.onCancelAll();
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
          <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-3 gap-2">
            <div className="flex flex-col items-center xl:w-[550px] md:w-[400px] xl:mt-1 md:mt-2 p-6 gap-2">
              <div className="text-center">
                <h1 className="text-black xl:text-xl md:text-lg xs:text-lg font-bold">
                  Anything the Pro needs to know to get them prepared/ quote
                  precisely?
                </h1>
              </div>
            </div>
            <div className="pb-7 xs:w-full xl:pl-0 md:pl-3">
              <input
                className="rounded-lg xl:h-10 lg:h-10 xs:h-10  xl:w-[530px] md:w-[400px] xs:w-full outline-none pl-3"
                type="text"
                placeholder="Comment"
              />
            </div>
            <div className="mt-7 xl:w-[550px] md:w-[400px] xs:w-full">
              <label
                className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop files to Attach, or
                    <span className="text-blue-600 underline">browse</span>
                  </span>
                </span>
                <input type="file" name="img_avatar" id="img_avatar" className="hidden" />
              </label>
            </div>
            <div className="flex gap-5 xl:w-[550px] md:w-[450px] justify-center">
              <button
                type="button"
                className="text-black w-32 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
                onClick={() => props.onCancel()}
              >
                Back
              </button>
              <button
                type="submit"
                onClick={() => {
                  setOpenModal(true);
                  props.onCancelAll()
                }}
                className="text-white w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continue
              </button>
            </div>
          </div>

        </Modal>
      )}
    </>
  );
}

export default CommentsModal;
