import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import Label from "../../components/UI/Label";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Formik, FormikErrors } from "formik";
import Error from "../../components/UI/Error";
import Heading from "../../components/UI/Heading";
import { AddBusiness } from "../../models/pro/business";

function AddBusinessModal({ onCancel }: { onCancel: () => void }) {
  const validate = (values: AddBusiness) => {
    const errors: FormikErrors<AddBusiness> = {};
    if (!values.name) {
      errors.name = "Please include a valid name of Business";
    }
    if (values.profile_picture) {
      errors.profile_picture = "Please include a profile picture";
    }

    return errors;
  };
  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg ">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4 " />
      </button>

      <div className="py-7">
        <Heading
          headingclassName="my-3  text-primaryGreen !font-semibold"
          variant="subHeader"
          text="Please check your email and phone number for the OTPs"
        />
        <Formik<AddBusiness>
          initialValues={{
            name: "",
            profile_picture: undefined,
            description: "",
            service_images: undefined,
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const formData = new FormData(); //initialize formdata
            console.log("here");
          }}
          validate={validate}
        >
          {(props) => (
            <form autoComplete="off" onSubmit={props.handleSubmit}>
              <div className="py-3">
                <Label required label="Upload Business Image" />
                <Input
                  id="profile_picture"
                  name="profile_picture"
                  value={props.values.profile_picture}
                  onChange={props.handleChange}
                />
                {props?.touched?.profile_picture &&
                props?.errors?.profile_picture ? (
                  <Error error={props?.errors?.profile_picture} />
                ) : null}
              </div>

              <div className="py-3">
                <Label required label="Enter Name for Business" />
                <Input
                  id="name"
                  name="name"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
                {props?.touched?.name && props?.errors?.name ? (
                  <Error error={props?.errors?.name} />
                ) : null}
              </div>
              <div className="flex w-full justify-center gap-5">
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  children="Cancel"
                  onClick={() => onCancel()}
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
                <Button
                  type="submit"
                  variant="filled"
                  color="primary"
                  children="Verify OTP"
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
              </div>
              {/* <Error error={error} className="text-center mt-3" /> */}
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default AddBusinessModal;
