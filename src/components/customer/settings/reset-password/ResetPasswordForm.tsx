import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Button from "../../../UI/Button";
import Label from "../../../UI/Label";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../store/customer/auth-context";

function ResetPasswordForm() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  //validate the logs entered in the form
  const validate = (values: any) => {
    const errors: FormikErrors<any> = {};
    if (!values.old_password) {
      errors.old_password = "Please include a password";
    }
    if (!values.new_password) {
      errors.new_password = "Please include a password";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Please include a confirm password.";
    }
    if (values.confirm_password !== values.new_password) {
      errors.confirm_password = "Both the passwords do not match.";
    }
    return errors;
  };
  const inputClassName =
    "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-poppins     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3";
  const buttonClassName =
    "px-6 py-2   w-full   xs:mx-auto md:mx-0  rounded-lg text-md font-semibold font-poppins border-slate-500";
  return (
    <Formik
      initialValues={{
        old_password: "",
        new_password: "",
        confirm_password: "",
      }}
      enableReinitialize
      onSubmit={(values) => {
        const formData = new FormData();
        formData.set("old_password", values.old_password);
        formData.set("new_password", values.new_password);
        resetPassword(formData);
      }}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-5">
            <Label required label="Old Password" className="ml-1" />

            <Input
              id="old_password"
              value={props.values.old_password}
              className={inputClassName}
              onChange={props.handleChange}
            />
            {props.touched.old_password && props.errors.old_password ? (
              <Error error={props?.errors.old_password} />
            ) : null}
          </div>

          <div className="my-5">
            <Label required label="Password" className="ml-1" />
            <Input
              id="new_password"
              value={props.values.new_password}
              className={inputClassName}
              onChange={props.handleChange}
            />
            {props.touched.new_password && props.errors.new_password ? (
              <Error error={props?.errors.new_password} />
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

          <div className="dark:bg-dimGray bg-white flex w-[100%] py-5 gap-4  ">
            <Button
              variant="ghost"
              color="gray"
              buttonClassName={buttonClassName}
              centerClassName="flex justify-center items-center"
              onClick={() => navigate("/home")}
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
