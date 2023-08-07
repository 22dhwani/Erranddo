import { Formik, FormikErrors } from "formik";
import Modal from "../home/Modal";
import Label from "../../components/UI/Label";
import Input from "../../components/UI/Input";
import Error from "../../components/UI/Error";
import { useTheme } from "../../store/theme-context";
import Close from "../../assets/close";
import Button from "../../components/UI/Button";
import { useReview } from "../../store/pro/review-context";

function FilterLeadsModal({
  id,
  onCancel,
}: {
  id: string;
  onCancel: () => void;
}) {
  const validate = (values: { response: string }) => {
    const errors: FormikErrors<{ response: string }> = {};
    if (!values.response) {
      errors.response = "Please include a response";
    }
    return errors;
  };
  const { theme } = useTheme();
  return (
    <Modal className="bg-slate-100 dark:bg-dimGray opacity-90  rounded-lg h-max overflow-y-scroll !py-0">
      <button
        className="sticky top-5 right-5 w-full flex justify-end"
        onClick={() => {
          onCancel();
        }}
      >
        {theme === "light" && <div children={<Close color="black" />} />}
        {theme === "dark" && <div children={<Close color="white" />} />}
      </button>
      <Formik
        initialValues={{
          radius: [],
          postcode: [],
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          const formData = new FormData();
        }}
        validate={validate}
      >
        {(props) => (
          <form autoComplete="off" onSubmit={props.handleSubmit}>
            <div className="pt-10">
              <Label required label="Enter Business Service" />
              <Input
                className="border-black"
                placeholder="Enter Postcode"
                name="postcode[1]"
                value={props.values.postcode[1]}
                onChange={props.handleChange}
              />
            </div>
            <div className="flex w-full sticky  bg-slate-100  dark:bg-dimGray py-4 bottom-0 justify-center gap-5 ">
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
                loading={isLoading}
                type="submit"
                variant="filled"
                color="primary"
                children="Add Response"
                centerClassName="flex justify-center items-center"
                buttonClassName="!px-3 font-poppins py-3 w-full"
              />
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default FilterLeadsModal;
