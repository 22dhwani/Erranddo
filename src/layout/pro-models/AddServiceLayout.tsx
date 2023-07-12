import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import Label from "../../components/UI/Label";
import Button from "../../components/UI/Button";
import { Formik, FormikErrors } from "formik";
import Error from "../../components/UI/Error";
import Heading from "../../components/UI/Heading";
import { AddBusiness, AddBusinessService } from "../../models/pro/business";
import { useBusiness } from "../../store/pro/dashboard-context";
import DropdownCompoenet from "../../components/UI/Dropdown";

function AddServiceModal({ onCancel }: { onCancel: () => void }) {
  const { data } = useBusiness();
  const business_name: string[] = [];
  data?.flatMap((item) => business_name.push(item.name));
  const validate = (values: AddBusinessService) => {
    const errors: FormikErrors<AddBusinessService> = {};
    if (!values.user_business_id) {
      errors.user_business_id = "Please include a valid  Business";
    }
    if (!values.service_id) {
      errors.service_id = "Please include a valid Service";
    }

    return errors;
  };
  return (
    <Modal className="bg-slate-100 opacity-90  rounded-lg h-[32rem]  overflow-y-scroll !py-0 ">
      <button
        className="fixed top-5 right-5"
        onClick={() => {
          onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4 " />
      </button>

      <div className="pt-7 h-full">
        <Heading
          headingclassName="mt-3  text-textColor text-lg !font-semibold"
          variant="subHeader"
          text="Add Service"
        />
        <Formik<AddBusinessService>
          initialValues={{
            user_business_id: 0,
            service_id: 0,
            radius: [],
            postcode: [],
            nation_wide: false,
            remote_service: false,
          }}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log("here");
          }}
          validate={validate}
        >
          {(props) => (
            <form
              autoComplete="off"
              onSubmit={props.handleSubmit}
              className="h-full"
            >
              <div className="py-3">
                <Label required label="Upload Business" />
                <DropdownCompoenet
                  className="my-2 "
                  isImage={true}
                  placeholder="Select A business"
                  options={business_name}
                  onChange={(newValue) => {
                    console.log(newValue);
                  }}
                />
                {props?.touched?.user_business_id &&
                props?.errors?.user_business_id ? (
                  <Error
                    error={props?.errors?.user_business_id}
                    className="mt-2"
                  />
                ) : null}
              </div>

              <div className="flex w-full sticky  bg-slate-100 py-4 bottom-0 justify-center gap-5 border-t-[0.5px] border-t-slate-200">
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
                  children="Add Business"
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default AddServiceModal;
