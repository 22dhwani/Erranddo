import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Button from "../../../UI/Button";
import Label from "../../../UI/Label";
import useSWR from "swr";
import { fetcher } from "../../../../store/customer/home-context";
import { UserData } from "../../../../models/user";
import { useContact } from "../../../../store/customer/contact-details-context";
import { useAuthPro } from "../../../../store/pro/auth-pro-context";
import Heading from "../../../UI/Heading";

function ContactDetailFormPro() {
  const { contactUpdate } = useContact();
  const { userData } = useAuthPro();

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
  const buttonClassName =
    "xs:ml-auto lg:mr-auto rounded-lg text-md font-semibold font-poppins border-slate-500";

  return (
    <Formik
      initialValues={{
        email: userData?.email,
        mobile_number: userData?.mobile_number,
      }}
      enableReinitialize
      onSubmit={(values) => {
        const formData = new FormData();
        if (values.email) {
          formData.set("email", values.email);
        }
        if (values.mobile_number) {
          formData.set("mobile_number", values.mobile_number);
        }
        contactUpdate(formData);
      }}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-3">
            <div className="flex flex-row justify-between">
              <Label required label="Email" className="ml-1 text-center" />
              <div
                className={`ml-16  ${
                  userData?.is_email_verified === "0"
                    ? "bg-slate-300 text-white"
                    : "!bg-green-500 !text-white"
                } px-3 rounded-md`}
              >
                <Heading
                  text={
                    userData?.is_email_verified === "0" ? "Verify" : "Verified"
                  }
                />
              </div>
            </div>

            <div className="my-5 flex justify-center">
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
          </div>
          <div className="my-3">
            <div className="flex flex-row justify-between">
              <Label required label="Mobile Number" className="text-center" />
              <div
                className={`ml-16 ${
                  userData?.is_mobile_verified === "0"
                    ? "bg-slate-300 text-white"
                    : "!bg-green-500 !text-white"
                }  px-3 rounded-md`}
              >
                <Heading
                  text={
                    userData?.is_mobile_verified === "0" ? "Verify" : "Verified"
                  }
                />
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <Input
                id="mobile_number"
                value={props.values.mobile_number}
                className={inputClassName}
                onChange={props.handleChange}
              />
            </div>
            <h6 className="dark:text-gray-400 text-gray-400 text-center text-xs xs:my-1 lg:my-1">
              **Verifing your contact details gives Pro’s confidence your
              request is genuine. **
            </h6>
            {props?.touched?.mobile_number && props?.errors?.mobile_number ? (
              <Error error={props?.errors?.mobile_number} />
            ) : null}
          </div>
          <div className="dark:bg-dimGray bg-white flex w-[100%] py-5 gap-4  ">
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
        </form>
      )}
    </Formik>
  );
}

export default ContactDetailFormPro;
