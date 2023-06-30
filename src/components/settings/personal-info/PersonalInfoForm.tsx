import { Formik, FormikErrors } from "formik";
import Input from "../../UI/Input";
import Error from "../../UI/Error";
import Button from "../../UI/Button";
import Label from "../../UI/Label";
import { useNavigate } from "react-router-dom";

function PersonalInfoForm() {
  const navigate = useNavigate();
  //validate the logs entered in the form
  const validate = (values: any) => {
    const errors: FormikErrors<any> = {};
    if (!values.name) {
      errors.name = "Please include a name";
    }

    if (!values.post_code) {
      errors.post_code = "Please include a postcode";
    }

    if (!values.bio) {
      errors.bio = "Please include a valid bio";
    } else if (values.bio.length < 6) {
      errors.bio = "Please include a  bio with minimum 6 characters";
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
        name: "",
        post_code: "",
        bio: "",
      }}
      enableReinitialize
      onSubmit={() => console.log("submit")}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-5">
            <Label required label="Name" className="ml-1" />
            <Input
              id="name"
              value={props.values.name}
              className={inputClassName}
              onChange={props.handleChange}
            />
            {props.touched.name && props.errors.name ? (
              <Error error={props?.errors.name} />
            ) : null}
          </div>
          <div className="my-5">
            <Label required label="Postcode" className="ml-1" />

            <Input
              id="post_code"
              value={props.values.post_code}
              className={inputClassName}
              onChange={props.handleChange}
            />
            <h6 className="dark:text-gray-400 text-gray-400 text-center text-xs xs:my-1 lg:my-1">
              **This will be the default postcode when you place a request**
            </h6>
            {props?.touched?.post_code && props?.errors?.post_code ? (
              <Error error={props?.errors?.post_code} />
            ) : null}
          </div>
          <div className="my-5">
            <Label required label="Bio" className="ml-1" />
            <Input
              id="bio"
              value={props.values.bio}
              className={inputClassName}
              onChange={props.handleChange}
            />
            {props?.touched?.bio && props?.errors?.bio ? (
              <Error error={props?.errors?.bio} />
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

export default PersonalInfoForm;
