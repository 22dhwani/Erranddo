import { Formik, FormikErrors } from "formik";
import Input from "../../../UI/Input";
import Error from "../../../UI/Error";
import Label from "../../../UI/Label";
import { useContact } from "../../../../store/contact-details-context";
import useSWR from "swr";
import { fetcher } from "../../../../store/home-context";
import { UserData } from "../../../../models/user";
import Button from "../../../UI/Button";

function ContactDetailFormPro() {
  const { contactUpdate } = useContact();
  const token = localStorage.getItem("data");
  let userData: any;
  if (token) {
    userData = JSON.parse(token);
  }
  const url = `https://erranddo.kodecreators.com/api/v1/user/hello/detail`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const profileData: UserData = data?.data ?? "";
  console.log(profileData);

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

  const buttonClassName =
    "xs:ml-auto lg:mr-auto rounded-lg text-md font-semibold font-sans border-slate-500";

  const inputClassName =
    "text-md md:w-2/5 text-slate-700 border-slate-500 outline-none font-medium font-sans border rounded-lg ease-in focus:caret-slate-500 lg:mr-3 mx-auto";

  return (
    <Formik
      initialValues={{
        email: profileData?.email,
        mobile_number: profileData?.mobile_number,
      }}
      enableReinitialize
      onSubmit={(values) => {
        const formData = new FormData();
        formData.set("email", values.email);
        formData.set("mobile_number", values.mobile_number);
        contactUpdate(formData);
      }}
      validate={validate}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <input className="hidden" autoComplete="false" />
          <div className="my-3">
            <div className="flex flex-row justify-between xl:mx-80 md:mx-52 lg:mx-52">
              <Label required label="Email" className="ml-1 text-center" />
              <Label
                label="Verified"
                className="text-center text-primaryGreen"
              />
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
            <div className="flex flex-row justify-between xl:mx-80 md:mx-52 lg:mx-52">
              <Label required label="Mobile Number" className="text-center " />
              <Label
                label="Verified"
                className="text-center text-primaryGreen"
              />
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
          <div className="dark:bg-mediumGray bg-white flex w-[100%] py-5 gap-4  ">
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
