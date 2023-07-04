import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";
import upload from "../../assets/Upload.svg";
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

  return (
    <>
      {props.open && (
        <Modal
          className="bg-slate-100 opacity-90 rounded-lg xl:w-[800px] md:w-[400px]"
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
          <div className="flex flex-col items-center xl:w-[800px] md:w-[400px] xl:mt-1 md:mt-2 p-6 gap-2">
            <div className="text-center">
              <h1 className="text-black xl:text-xl md:text-lg xs:text-lg font-bold">
                Anything the Pro needs to know to get them prepared/ quote
                precisely?
              </h1>
            </div>
          </div>
          <div className="pb-7">
            <input
              className="rounded-lg xl:h-40 lg:h-10 xs:h-10  xl:w-[776px] md:w-[400px] xs:w-full outline-none"
              type="text"
              placeholder="Comment"
            />
          </div>
          <div className="pb-7">
            <div className="rounded-lg xl:h-40 lg:h-10 xs:h-10  xl:w-[776px] md:w-[400px] xs:w-full outline-none bg-white">
              <div className="flex flex-row">
                <button>
                  <img className="ml-6" src={upload}></img>
                </button>
                <div>
                  <div className="text-sm">Drag and drop files to upload</div>
                  <div>hi</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 xl:w-[800px] md:w-[400px] justify-center">
            <button
              type="button"
              onClick={() => props.onCancel()}
              className="text-black w-32 border-[#707070] border xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
            >
              Back
            </button>
            <button
              type="button"
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

export default CommentsModal;
