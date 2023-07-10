import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { Formik } from "formik";
import { UserData } from "../../models/user";
import useSWR from "swr";
import { fetcher } from "../../store/home-context";
import { useAuthPro } from "../../store/auth-pro-context";

function ProfileImageModal(props: { onCancel: () => void }) {
  const { profileHandler } = useAuthPro();
  const token = localStorage.getItem("data");
  let userData: any;
  if (token) {
    userData = JSON.parse(token);
  }

  const url = `https://erranddo.kodecreators.com/api/v1/user/detail?user_id=${userData?.id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const profileData: UserData = data?.data ?? "";

  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg lg:w-[80vh] xs:w-[40vh]">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          props.onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
      </button>
      <Formik
        initialValues={{
          img_avatar: profileData?.img_avatar,
        }}
        enableReinitialize
        onSubmit={(values) => {
          const formData = new FormData();
          formData.set("img_avatar", values.img_avatar);
          profileHandler(formData);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col ">
              <div className="mt-7 lg:w-[77vh] xs:w-[37vh]">
                <label className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="img_avatar"
                    id="img_avatar"
                    className="hidden"
                    onChange={props.handleChange}
                  />
                </label>
              </div>
              <div className="flex gap-2 items-center justify-center mt-5 lg:w-[77vh] xs:w-[37vh]">
                <button
                  type="button"
                  className="text-black w-32 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
                  // onClick={() => props.onCancel()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white  w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Okay
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default ProfileImageModal;
