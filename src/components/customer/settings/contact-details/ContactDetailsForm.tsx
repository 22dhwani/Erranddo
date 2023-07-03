import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Button from "../../../UI/Button";
import Label from "../../../UI/Label";
import { useNavigate } from "react-router-dom";

function ContactDetailsForm() {
  const navigate = useNavigate();
  //validate the logs entered in the form
  const validate = (values: any) => {
    const errors: FormikErrors<any> = {};
    if (!values.email) {
      errors.email = "Please include a email";
    } else if (!values.email.includes("@")) {
      errors.email = "Please include a valid email address";
    }

    if (!values.mobile_number) {
      errors.mobile_number = "Please include a mobile number";
    }

    return errors;
  };
  const inputClassName =
    "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-sans     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3";
  const buttonClassName =
    "px-6 py-2   w-full   xs:mx-auto md:mx-0  rounded-lg text-md font-semibold font-sans border-slate-500";
  return (
    <Formik
      initialValues={{
        email: "",
        mobile_number: "",
      }}
      enableReinitialize
      onSubmit={() => console.log("submit")}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-5">
            <Label required label="Email" className="ml-1" />
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
            <Label required label="Mobile Number" className="ml-1" />

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

          <div className="dark:bg-mediumGray bg-white flex w-[100%] py-5 gap-4  ">
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
              Submit
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default ContactDetailsForm;
