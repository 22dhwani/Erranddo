import React, { useState } from "react";
import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";

import Heading from "../../components/UI/Heading";
import Input from "../../components/UI/Input";
import DropdownCompoenet from "../../components/UI/Dropdown";
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
    const dropDownOne = [
        "Per hour",
        "Per day",
        "Per day / Per Head",
        "Per week",
        "Per Month",
    ];
    const inputClassName =
        "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-sans     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3";
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
                        <div className="xs:w-full xl:pl-0 md:pl-3">
                            <Heading variant="headingTitle" text="How much did it cost to get the job done?" headingclassName="xs:text-md text-center" />
                        </div>
                        <div className="pb-7 xs:w-full xl:pl-0 md:pl-3">
                            <Heading variant="smallTitle" text="We do not disclose this infoirmation, It is used to improve our service" headingclassName="text-slate-500 text-center xs:text-xs" />
                        </div>
                        <div className="flex  gap-3 xl:w-[450px] md:w-[350px] items-center justify-center pb-12">
                            <p>£</p>
                            <input
                                className="focus:outline-none w-36 placeholder:text-md placeholder:font-normal rounded-lg h-11 bg-white pl-3"
                            />
                            <DropdownCompoenet
                                isImage={true}
                                placeholder="One time fee"
                                placeholderClassName="text-xs "
                                options={dropDownOne}
                                onChange={(newValue) => {
                                    console.log(newValue.value);
                                }}
                                className="w-36"
                            />
                        </div>
                        <div className="flex pb-11 xs:w-full xl:pl-0 md:pl-3 justify-center items-center gap-3">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <Heading variant="smallTitle" text="I’d rather not say" headingclassName="text-slate-500 text-center xs:text-xs" />
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
