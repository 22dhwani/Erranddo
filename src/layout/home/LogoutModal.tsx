import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";

import { useAuth } from "../../store/auth-context";
import Button from "../../components/UI/Button";

function LogoutModal(props: { onCancel: () => void }) {
  const { logout, isLoading } = useAuth();
  const logoutHandler = async () => {
    logout();
  };

  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg  dark:bg-dimGray">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          props.onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
      </button>
      <div className="flex flex-col w-full gap-5 ">
        <h1 className="text-black dark:text-white xl:text-lg md:text-md font-medium text-center mt-7 mb-3 ">
          Are you sure you want to logout ?
        </h1>

        <div className="flex gap-2 items-center justify-center px-5 ">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              props.onCancel();
            }}
            type="button"
            centerClassName="flex justify-center dark:text-white"
            buttonClassName=" !px-10 "
          >
            Cancel
          </Button>
          <Button
            loading={isLoading}
            variant="filled"
            color="primary"
            onClick={() => {
              logoutHandler();
            }}
            type="button"
            centerClassName="flex justify-center dark:text-white"
            buttonClassName=" !px-10   "
          >
            Logout
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default LogoutModal;
