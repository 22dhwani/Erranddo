import React, { useState } from "react";
import Close from "../../assets/close.tsx";

import { useAuth } from "../../store/auth-context";
import Button from "../../components/UI/Button";
import Modal from "../home/Modal";
import Label from "../../components/UI/Label";
import Input from "../../components/UI/Input";
import { useNavigate } from "react-router";
import { useTheme } from "../../store/theme-context.tsx";

function ContactModal(props: { onCancel: () => void }) {
  const inputClassName =
    "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none font-medium font-sans border rounded-lg ease-in focus:caret-slate-500 lg:mr-3";
  const navigate = useNavigate();

  const buttonClassName =
    "px-6 py-2  xl:w-[150px] md:w-[100px] xs:mx-auto md:mx-0 rounded-lg text-md font-semibold font-sans border-slate-500";

  const { theme } = useTheme();
  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[490px] dark:bg-dimGray">
      <button
        className="absolute top-5 right-5"
        onClick={() => {
          props.onCancel();
        }}
      >
        {theme === "light" && <div children={<Close color="black" />} />}
        {theme === "dark" && <div children={<Close color="white" />} />}
      </button>
      <div className="flex flex-col">
        <h1 className="text-black dark:text-white xl:text-lg md:text-md font-medium !text-center mt-7 mb-3">
          Edit Contact Details
        </h1>
      </div>
      <div className="xl:w-[550px] md:w-[470px]">
        <div className="flex flex-col h-80 overflow-y-auto">
          <div className="flex flex-col px-5 py-2 sm:flex-row sm:items-center">
            <Label className="w-40">Contact No.</Label>
            <Input className={inputClassName} />
          </div>
          <div className="flex flex-col px-5 py-2 sm:flex-row sm:items-center">
            <Label className="w-40">Company Website</Label>
            <Input className={inputClassName} />
          </div>
          <div className="flex flex-col px-5 py-2 sm:flex-row sm:items-center">
            <Label className="w-40">Email Address</Label>
            <Input className={inputClassName} />
          </div>
          <div className="flex flex-col px-5 py-2 sm:flex-row sm:items-center">
            <Label className="w-40">Facebook Account</Label>
            <Input className={inputClassName} />
          </div>
          <div className="flex flex-col px-5 py-2 sm:flex-row sm:items-center">
            <Label className="w-40">Twitter Account</Label>
            <Input className={inputClassName} />
          </div>
          <div className="flex flex-col px-5 py-2 sm:flex-row sm:items-center">
            <Label className="w-40">Instagram Account</Label>
            <Input className={inputClassName} />
          </div>
        </div>

        <div className="dark:bg-dimGray flex justify-center pt-3 gap-4">
          <Button
            variant="ghost"
            color="gray"
            buttonClassName={buttonClassName}
            centerClassName="flex justify-center items-center"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            color="primary"
            buttonClassName={buttonClassName}
            centerClassName="flex justify-center items-center"
            type="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ContactModal;
