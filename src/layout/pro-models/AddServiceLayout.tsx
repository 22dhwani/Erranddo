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
import { useState } from "react";

function AddServiceModal({ onCancel }: { onCancel: () => void }) {
  const [businessId, setBusinessId] = useState(0);

  const { data } = useBusiness();
  const business_name: { value: number; label: string }[] = [];
  data?.flatMap((item) =>
    business_name.push({ value: item.id, label: item.name })
  );

  const validate = (values: AddBusinessService) => {
    const errors: FormikErrors<AddBusinessService> = {};
    if (!values.user_business_id) {
      errors.user_business_id = "Please include a valid  Business";
    }

    return errors;
  };
  console.log(business_name);
  return (
    <Modal
      className="bg-slate-100 opacity-90 xs:w-[90vw] rounded-lg max-h-[30rem] h-[30rem]  overflow-y-clip !py-0  lg:!w-[35vw] lg:!px-0"
      overlayClassName="!w-full"
    >
      <button
        className="fixed top-5 right-5"
        onClick={() => {
          onCancel;
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4 " />
      </button>

      <div className="pt-7 h-full lg:!px-5">
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
            console.log("submit");
            console.log("haha", values.user_business_id);
          }}
          validate={validate}
        >
          {(props) => (
            <form
              autoComplete="off"
              onSubmit={props.handleSubmit}
              className="h-full w-full"
            >
              <div className="py-3">
                <Label required label="Upload Business" />
                <DropdownCompoenet
                  className="my-2 "
                  isImage={true}
                  placeholder="Select A business"
                  options={business_name}
                  onChange={(newValue) => {
                    props.setFieldValue("user_business_id", newValue.value);
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
              <div className="pb-3">
                <Label required label="Upload Business Services" />
                <DropdownCompoenet
                  className="my-2 "
                  isImage={true}
                  placeholder="Select A Business Service"
                  options={business_name}
                  onChange={(newValue) => {
                    props.setFieldValue("user_business_id", newValue.value);
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
                  children="Add Service"
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
