import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";
import Button from "../../components/UI/Button";
import { useAuth } from "../../store/auth-context";

function LogoutModal(props: {
    onCancel: () => void;
}) {
    const { logout } = useAuth();
    const logoutHandler = async (event: React.MouseEvent) => {
        logout();
    };

    return (
        <Modal className="bg-slate-100 opacity-90 rounded-lg">
            <button
                className=" absolute top-5 right-5"
                onClick={() => {
                    props.onCancel()
                }}
            >
                <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
            </button>
            <div className="flex flex-col ">
                <div className="flex xl:mt-1 md:mt-2">
                    <h1 className="text-black xl:text-lg md:text-md font-medium p-2">
                        Are you sure you want to logout ?
                    </h1>
                </div>
                <div className="flex gap-2 items-center justify-center p-3">
                    <button
                        type="button"
                        className="text-black w-32 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="text-white  w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={logoutHandler}
                    >
                        Okay
                    </button>
                </div>
            </div>
        </Modal>
    )
}


export default LogoutModal;
