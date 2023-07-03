import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Button from "../../../UI/Button";
import Label from "../../../UI/Label";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const navigate = useNavigate();
  //validate the logs entered in the form
  const validate = (values: any) => {
    const errors: FormikErrors<any> = {};
    if (!values.password) {
      errors.password = "Please include a password";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Please include a confirm password.";
    }
    if (values.confirm_password !== values.password) {
      errors.confirm_password = "Both the passwords do not match.";
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
        password: "",
        confirm_password: "",
      }}
      enableReinitialize
      onSubmit={() => console.log("submit")}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-5">
            <Label required label="Password" className="ml-1" />
            <Input
              id="password"
              value={props.values.password}
              className={inputClassName}
              onChange={props.handleChange}
            />
            {props.touched.password && props.errors.password ? (
              <Error error={props?.errors.password} />
            ) : null}
          </div>
          <div className="my-5">
            <Label required label="Confirm Password" className="ml-1" />

            <Input
              id="confirm_password"
              value={props.values.confirm_password}
              className={inputClassName}
              onChange={props.handleChange}
            />

            {props?.touched?.confirm_password &&
            props?.errors?.confirm_password ? (
              <Error error={props?.errors?.confirm_password} />
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

export default ResetPasswordForm;
