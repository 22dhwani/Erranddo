import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Label from "../../../UI/Label";
import Button from "../../../UI/Button";
import { useAuthPro } from "../../../../store/pro/auth-pro-context";

function PasswordDetailFormPro() {
  const { resetPassword, error, isPasswordLoading } = useAuthPro();

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
    "xs:ml-auto lg:mr-auto rounded-lg text-md font-semibold font-poppins border-slate-500";
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
          <div className="my-3">
            <div className="flex ">
              <Label
                required
                label="Old Password"
                className="ml-1 text-center"
              />
            </div>
            <div className="my-5 justify-center">
              <Input
                id="old_password"
                value={props.values.old_password}
                className={inputClassName}
                onChange={props.handleChange}
              />
              {props.touched.old_password && props.errors.old_password ? (
                <Error error={props?.errors.old_password} />
              ) : (
                <Error error={error} />
              )}
            </div>
          </div>
          <div className="my-3">
            <div className="flex ">
              <Label required label="Password" className="ml-1 text-center" />
            </div>
            <div className="my-5 justify-center">
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
          </div>
          <div className="my-3">
            <div className="flex">
              <Label
                required
                label=" Confirm Password"
                className="ml-1 text-center"
              />
            </div>
            <div className="my-5 justify-center">
              <Input
                id="confirm_password"
                value={props.values.confirm_password}
                className={inputClassName}
                onChange={props.handleChange}
              />
              {props.touched.confirm_password &&
              props.errors.confirm_password ? (
                <Error error={props?.errors.confirm_password} />
              ) : null}
            </div>
          </div>
          <div className="dark:bg-dimGray bg-white flex w-[100%] py-5 gap-4  ">
            <Button
              loading={isPasswordLoading}
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

export default PasswordDetailFormPro;
