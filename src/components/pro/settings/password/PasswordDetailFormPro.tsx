import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Label from "../../../UI/Label";
import Button from "../../../UI/Button";

function PasswordDetailFormPro() {
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
    "xs:ml-auto lg:mr-auto rounded-lg text-md font-semibold font-sans border-slate-500";
  return (
    <Formik
      initialValues={{
        password: "",
      }}
      enableReinitialize
      onSubmit={(values) => {
        const formData = new FormData();
        formData.set("password", values.password);
      }}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-3">
            <div className="flex ">
              <Label required label="Password" className="ml-1 text-center" />
            </div>
            <div className="my-5 flex justify-center">
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
          </div>
          <div className="my-3">
            <div className="flex">
              <Label
                required
                label=" Confirm Password"
                className="ml-1 text-center"
              />
            </div>
            <div className="my-5 flex justify-center">
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

export default PasswordDetailFormPro;
