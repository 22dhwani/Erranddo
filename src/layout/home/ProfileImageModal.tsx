import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { Formik } from "formik";
import { UserData } from "../../models/user";
import useSWR from "swr";
import { fetcher } from "../../store/home-context";
import { useAuthPro } from "../../store/auth-pro-context";
import Button from "../../components/UI/Button";

function ProfileImageModal({ onCancel }: { onCancel: () => void }) {
  const { profileHandler, isLoading } = useAuthPro();
  const token = localStorage.getItem("data");
  let userData: any;
  if (token) {
    userData = JSON.parse(token);
  }

  const url = `https://erranddo.kodecreators.com/api/v1/user/detail?user_id=${userData?.id}`;
  const { data, error, mutate } = useSWR(url, fetcher);

  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg lg:w-[80vh] xs:w-[40vh]  dark:bg-dimGray">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
      </button>
      <Formik
        initialValues={{
          img_avatar: undefined,
        }}
        enableReinitialize
        onSubmit={(values) => {
          const formData = new FormData();
          if (values?.img_avatar) formData.set("img_avatar", values.img_avatar);
          profileHandler(formData);
          mutate();
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
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                      if (ev?.target?.files) {
                        console.log(ev?.target?.files[0]);
                        // if (ev?.target?.files?.length > 0) {
                        props.setFieldValue("img_avatar", ev?.target?.files[0]);
                        // }
                      }
                    }}
                  />
                </label>
              </div>
              <div className="flex gap-2 items-center justify-center mt-5 lg:w-[77vh] xs:w-[37vh]">
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  children="Cancel"
                  onClick={() => onCancel()}
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
                <Button
                  loading={isLoading}
                  type="submit"
                  variant="filled"
                  color="primary"
                  children="Submit"
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default ProfileImageModal;
