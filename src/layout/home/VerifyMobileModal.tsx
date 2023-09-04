import { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close";
import { FormikErrors, useFormik } from "formik";
import Input from "../../components/UI/Input";
import Label from "../../components/UI/Label";
import Error from "../../components/UI/Error";
import { OtpValues } from "../../models/user";
import { useAuth } from "../../store/customer/auth-context";
import Button from "../../components/UI/Button";

import CommentsModal from "./CommentsModal";
import { useTheme } from "../../store/theme-context";

function VerifyMobileModal(props: {
  email: string;
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
  mobile_number: string;
}) {
  const { verifyOtp, isLoading, error, sendOtp, manageLoading } = useAuth();

  const formik = useFormik({
    initialValues: {
      mobile_number: "",
    },
    validate: (values: OtpValues) => {
      const errors: FormikErrors<OtpValues> = {};

      if (!values.mobile_number) {
        errors.mobile_number = "Please include a valid Otp of mobile number";
      }
      return errors;
    },

    onSubmit: async (values) => {
      const formData = new FormData(); //initialize formdata
      formData.set("otp", values.mobile_number);
      formData.set("email", props.email);
      const success = await verifyOtp(formData, "register");
      setTimeout(() => {
        if (success) {
          setOpenMenu(true);
        }
      }, 1000);
    },
  });
  const [openMenu, setOpenMenu] = useState(false);

  const { theme } = useTheme();
  return (
    <>
      {openMenu && (
        <CommentsModal
          open={openMenu}
          onCancel={() => {
            setOpenMenu(false);
            localStorage.removeItem("email"), localStorage.removeItem("mobile_number")
          }}
          onCancelAll={() => {
            setOpenMenu(false);
            props.onCancelAll();
            localStorage.removeItem("email"), localStorage.removeItem("mobile_number")
          }}
        />
      )}

      {props.open && (
        <Modal
          className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px] h-[28rem] dark:bg-modalDarkColor"
          backdropClassName="bg-transparent"
        >
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancelAll();
              localStorage.removeItem("email"), localStorage.removeItem("mobile_number")
            }}
          >
            {theme === "light" && <div children={<Close color="black" />} />}
            {theme === "dark" && <div children={<Close color="white" />} />}
          </button>
          <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-6 gap-2">
            <div className="text-center">
              <h1 className="text-black dark:text-white xl:text-xl md:text-lg xs:text-lg font-bold">
                We’ve sent you a text to verify your mobile number
              </h1>
            </div>
          </div>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="my-5">
              <Label
                label="A One-time password (OTP) has been sent to your mobile phone"
                required
                className="my-1"
              />
              <Input
                className="w-full bg-white xl:w-[550px] md:w-[450px]"
                type="text"
                placeholder="Enter Verification Code"
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

            <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] lg:pb-24 xs:pb-20  gap-2">
              <div className="text-center flex flex-row gap-2">
                <button
                  className="text-green-500"
                  type="button"
                  onClick={() => {
                    const formData = new FormData(); //initialize formdata
                    formData.set("email", props.email);
                    formData.set("mobile_number", props.mobile_number);
                    sendOtp(formData);
                  }}
                >
                  Resend Code
                </button>
                <div className="xl:h-6 md:h-5 min-h-[1em] w-0.5 bg-[#707070] opacity-40"></div>
                <button
                  className="text-primaryBlue"
                  type="button"
                  onClick={() => { manageLoading(false), props.onCancel() }}
                >
                  Change number
                </button>
              </div>
            </div>
            <div className="flex gap-5 xl:w-[550px] md:w-[450px] justify-center">
              <Button
                disabled={
                  formik?.values?.mobile_number?.length === 0
                    ? true
                    : false
                }
                loading={isLoading}
                type="submit"
                buttonClassName="text-white  w-3/6 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-6 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <p className="text-center w-full">Continue</p>
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
