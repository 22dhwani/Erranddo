import React, { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { FormikErrors, useFormik } from "formik";
import NearlyThere from "./NearlyThere";
import Input from "../../components/UI/Input";
import Label from "../../components/UI/Label";
import Error from "../../components/UI/Error";
import { OtpValues } from "../../models/user";
import { useAuth } from "../../store/auth-context";
import Button from "../../components/UI/Button";
import QuestionsModal from "./QuestionsModal";

function VerifyMobileModal(props: {
  email: string;
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  const { verifyOtp, isLoading, error } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      mobile_number: "",
    },
    validate: (values: OtpValues) => {
      const errors: FormikErrors<OtpValues> = {};
      if (!values.email) {
        errors.email = "Please include a valid Otp of Email";
      }
      if (!values.mobile_number) {
        errors.mobile_number = "Please include a valid Otp of mobile number";
      }
      return errors;
    },

    onSubmit: async (values) => {
      const formData = new FormData(); //initialize formdata
      formData.set("otp", values.mobile_number);
      formData.set("mail_otp", values.email);
      formData.set("email", props.email);
      verifyOtp(formData, "register");
      console.log("eee", error);
      if (error === "" && !isLoading) {
        console.log("sdff");
        setTimeout(() => {
          setOpenQuestion(true);
        }, 2000);
      }
    }
  })
  // const [openMenu, setOpenMenu] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);

  return (
    <>
      {/* {
        <NearlyThere
          open={openMenu}
          onCancel={() => {
            setOpenMenu(false);
          }}
          onCancelAll={() => {
            setOpenMenu(false);
            props.onCancelAll();
          }}
        />
      } */}
      {
        <QuestionsModal
          open={openQuestion}
          onCancel={() => {
            setOpenQuestion(false);
          }}
          onCancelAll={() => {
            setOpenQuestion(false);
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
          <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-6 gap-2">
            <div className="text-center">
              <h1 className="text-black xl:text-xl md:text-lg xs:text-lg font-bold">
                We’ve sent you a text to verify your mobile number
              </h1>
            </div>
          </div>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="my-5">
              <Label
                label="Enter Otp on Mobile Number"
                required
                className="my-1"
              />
              <Input
                className="w-full bg-white xl:w-[550px] md:w-[450px]"
                type="text"
                placeholder="Mobile Number"
                id="mobile_number"
                name="mobile_number"
                onChange={formik.handleChange}
                value={formik.values.mobile_number}
              />
              {formik.touched.mobile_number && formik.errors.mobile_number ? (
                <Error
                  className="text-red-600  "
                  error={formik.errors.mobile_number}
                ></Error>
              ) : null}
            </div>
            <div className="my-5">
              <Label
                label="Enter Otp on Email Address"
                required
                className="my-1"
              />
              <Input
                className="w-full bg-white xl:w-[550px] md:w-[450px]"
                type="text"
                placeholder="Email Address"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Error
                  className="text-red-600  "
                  error={formik.errors.email}
                ></Error>
              ) : null}
            </div>

            <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] pb-5  gap-2">
              <div className="text-center flex flex-row gap-2">
                <button className="text-green-500">Resend Code</button>
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
              <Button
                loading={isLoading}
                type="submit"
                buttonClassName="text-white w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continue
              </Button>
            </div>
            <Error
              error={error}
              className="text-center mt-3  xl:w-[550px] md:w-[450px]"
            />
          </form>
        </Modal>
      )}
    </>
  );
}

export default VerifyMobileModal;
