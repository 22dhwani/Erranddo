import React, { useState } from "react";
import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";

import Heading from "../../components/UI/Heading";
import Input from "../../components/UI/Input";
function CostModal(props: {
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
    const list = ["a", "b", "c", "d", "e"]
    return (
        <>
            {props.open && (
                <Modal
                    className="bg-slate-100 opacity-90 rounded-lg xl:w-[470px] md:w-[370px]"
                >
                    <button
                        className=" absolute top-5 right-5"
                        onClick={() => {
                            props.onCancelAll();
                        }}
                    >
                        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
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
                        <div className="flex flex-col gap-3 xl:w-[450px] md:w-[350px] pl-7 pb-5">
                            hello
                        </div>
                        <div className="flex gap-5 xl:w-[450px] md:w-[350px] justify-around">
                            <button
                                type="button"
                                onClick={() => {
                                    props.onCancel();
                                }}
                                className="text-black w-36 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="text-white w-36 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-2 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Close Request
                            </button>
                        </div>
                    </div>

                </Modal >
            )
            }
        </>
    );
}

export default CostModal;
