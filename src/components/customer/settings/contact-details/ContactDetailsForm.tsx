import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Label from "../../../UI/Label";
import Heading from "../../../UI/Heading";
import Button from "../../../UI/Button";
import EditContactModal from "../../../../layout/home/EditContactModal";
import { useState } from "react";
import { useAuth } from "../../../../store/customer/auth-context";
import EmailVerificationLinkModal from "../../../../layout/customer/EmailVerificationLinkModal";

function ContactDetailsForm() {
  const { userData, mutate, sendOtp } = useAuth();
  const { profileHandler, isProfileLoading } = useAuth();

  //validate the logs entered in the form
  const validate = (values: any) => {
    const errors: FormikErrors<any> = {};
    if (!values.email) {
      errors.email = "Please include an email";
    } else if (!values.email.includes("@")) {
      errors.email = "Please include a valid email address";
    }

    if (!values.mobile_number) {
      errors.mobile_number = "Please include a mobile number";
    }

    return errors;
  };
  const inputClassName =
    "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-poppins     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3";
  const [openModal, setOpenModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: userData?.email,
          mobile_number: userData?.mobile_number,
        }}
        enableReinitialize
        onSubmit={async (values) => {
          const formData = new FormData();
          if (values.email) {
            formData.set("email", values.email);
          }
          if (values.mobile_number) {
            formData.set("mobile_number", values.mobile_number);
          }
          profileHandler(formData);
          await mutate();
        }}
        validate={validate}
      >
        {(props) => (
          <form autoComplete="off" onSubmit={props.handleSubmit}>
            {openModal && (
              <EditContactModal
                onCancel={() => setOpenModal(false)}
                email={props.values.email ?? ""}
              />
            )}
            {openEmailModal && (
              <EmailVerificationLinkModal
                onCancel={() => setOpenEmailModal(false)}
                email={props.values.email ?? ""}
              />
            )}
            <input className="hidden" autoComplete="false" />
            <div className="my-5">
              <div className="flex justify-between">
                <Label required label="Email" className="ml-1" />

                <Button
                  type="button"
                  variant="filled"
                  color="primary"
                  size="normal"
                  buttonClassName={`!py-0.5 !px-5  
                  ${
                    userData?.is_email_verified === "0"
                      ? "bg-slate-300 text-white hover:bg-slate-400"
                      : "!bg-green-500 !text-white"
                  }  rounded-md`}
                  onClick={() => {
                    const formData = new FormData(); //initialize formdata
                    formData.set("email", props.values.email ?? "");
                    formData.set("mobile_number", props.values.mobile_number);
                    formData.set("key", "0");
                    sendOtp(formData);
                    setOpenEmailModal(!openEmailModal);
                  }}
                >
                  {userData?.is_email_verified === "0" ? "Verify" : "Verified"}
                </Button>
              </div>
              <Input
                id="email"
                value={props.values.email}
                className={inputClassName}
                onChange={props.handleChange}
              />
              {props.touched.email && props.errors.email ? (
                <Error error={props?.errors.email} />
              ) : null}
            </div>
            <div className="my-5">
              <div className="flex justify-between">
                <Label required label="Mobile Number" className="ml-1" />
                <Button
                  type="button"
                  variant="filled"
                  color="primary"
                  size="normal"
                  buttonClassName={`!py-0.5 !px-5  
                  ${
                    userData?.is_mobile_verified === "0"
                      ? "bg-slate-300 text-white hover:bg-slate-400"
                      : "!bg-green-500 !text-white"
                  }  rounded-md`}
                  onClick={() => {
                    const formData = new FormData(); //initialize formdata

                    formData.set("email", props.values.email ?? "");
                    formData.set("mobile_number", props.values.mobile_number);
                    formData.set("key", "1");
                    sendOtp(formData);
                    setOpenModal(!openModal);
                  }}
                >
                  {userData?.is_mobile_verified === "0" ? "Verify" : "Verified"}
                </Button>
              </div>
              <Input
                id="mobile_number"
                value={props.values.mobile_number}
                className={inputClassName}
                onChange={props.handleChange}
              />
              <h6 className="dark:text-gray-400 text-gray-400 text-center text-xs xs:my-1 lg:my-1">
                **Verifing your contact details gives Pro’s confidence your
                request is genuine. **
              </h6>
              {props?.touched?.mobile_number && props?.errors?.mobile_number ? (
                <Error error={props?.errors?.mobile_number} />
              ) : null}
            </div>

            <div className="dark:bg-dimGray bg-white flex w-[100%] py-5 gap-4 justify-center">
              <Button
                loading={isProfileLoading}
                variant="filled"
                color="primary"
                centerClassName="flex justify-center items-center text-white"
                type="submit"
                disabled={
                  !props.values.email ||
                  !props.values.mobile_number ||
                  (userData &&
                    userData.email === props.values.email &&
                    userData?.mobile_number === props.values.mobile_number)
                }
              >
                Save
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default ContactDetailsForm;
