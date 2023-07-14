import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import Label from "../../components/UI/Label";
import Button from "../../components/UI/Button";
import { Formik, FormikErrors } from "formik";
import Error from "../../components/UI/Error";
import Heading from "../../components/UI/Heading";
import { AddBusinessService, ServiceData } from "../../models/pro/business";
import { useBusiness } from "../../store/pro/dashboard-context";
import DropdownCompoenet from "../../components/UI/Dropdown";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../store/customer/home-context";
import Input from "../../components/UI/Input";
import { useService } from "../../store/pro/service-context";

function AddServiceModal({ onCancel }: { onCancel: () => void }) {
  //handling service dropdown
  const url = `https://erranddo.kodecreators.com/api/v1/business-services`;
  const dummy_data: ServiceData[] = [];
  let datarender: ServiceData[] = [];
  const {
    data: dataa,

    isLoading: isServiceLoading,
  } = useSWR(url, fetcher);
  datarender = dataa?.data || dummy_data;

  let service_name: { value: number; label: string }[] = [];
  datarender?.flatMap((item) =>
    service_name.push({ value: item?.service_id, label: item?.service?.name })
  );
  service_name = service_name.filter((item, index, arr) => {
    // Check if the current item's index is the first occurrence of the name in the array
    return arr.findIndex((obj) => obj.label === item.label) === index;
  });
  service_name = service_name.filter((item) => item?.value);

  //handling business dropdown
  const { data, isBussinessLoading, addServiceBusiness, error, isLoading } =
    useBusiness();
  const business_name: { value: number; label: string }[] = [];
  data?.flatMap((item) =>
    business_name?.push({ value: item.id, label: item.name })
  );

  const validate = (values: AddBusinessService) => {
    const errors: FormikErrors<AddBusinessService> = {};
    if (!values.user_business_id) {
      errors.user_business_id = "Please include a valid  Business";
    }
    if (!values.service_id) {
      errors.service_id = "Please include a valid  Service";
    }
    if (values.postcode.length === 0) {
      errors.postcode = "Please include a valid  location";
    }

    if (!values.nation_wide && !values.remote_service && !values.radius[0]) {
      errors.radius = "Please include a valid  radius";
    }

    return errors;
  };

  return (
    <Modal
      className="bg-slate-100 opacity-90 xs:w-[90vw] rounded-lg max-h-[30rem] h-[30rem]  overflow-y-scroll !py-0  lg:!w-[45vw] lg:!px-0"
      overlayClassName="!w-full"
    >
      <button
        className="fixed top-5 right-5"
        onClick={() => {
          onCancel();
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
            const formData = new FormData();
            formData.set(
              "user_business_id",
              values.user_business_id.toString()
            );
            if (values.nation_wide || values.remote_service) {
              formData.set(`data[${0}][post_code_id]`, values.postcode[0]);
            } else {
              values.postcode.map((code, i) =>
                formData.set(`data[${i}][post_code_id]`, code)
              );
              values.radius.map((code, i) =>
                formData.set(`data[${i}][radius]`, code)
              );
            }
            formData.set("service_id", values.service_id.toString());
            formData.set("remote_service", values.remote_service ? "1" : "0");
            formData.set("nation_wide", values.nation_wide ? "1" : "0");
            addServiceBusiness(formData);
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
                  className="my-2 !z-30 relative "
                  isImage={true}
                  placeholder="Select A business"
                  options={
                    isBussinessLoading
                      ? [{ value: "Please Wait", label: "Please wait" }]
                      : business_name
                  }
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
                  className="my-2 !z-10 relative"
                  isImage={true}
                  placeholder="Select A Business Service"
                  options={
                    isServiceLoading
                      ? [{ value: "Please Wait", label: "Please wait" }]
                      : service_name
                  }
                  onChange={(newValue) => {
                    props.setFieldValue("service_id", newValue.value);
                  }}
                />
                {props?.touched?.service_id && props?.errors?.service_id ? (
                  <Error error={props?.errors?.service_id} className="mt-2" />
                ) : null}
              </div>
              {props.values.nation_wide || props.values.remote_service ? (
                <div>
                  <Label required label="Enter Location" />
                  <Input
                    className="border-black"
                    placeholder="Enter Location"
                    name="postcode[0]"
                    value={props.values.postcode[0]}
                    onChange={props.handleChange}
                  />
                  {props?.touched?.postcode && props?.errors?.postcode ? (
                    <Error error={props?.errors?.postcode} className="mt-2" />
                  ) : null}
                </div>
              ) : (
                <div>
                  <div className="pb-3 grid xl:grid-cols-2 xs:gap-5">
                    <div>
                      <Label required label="Upload Postcode One" />
                      <Input
                        className="border-black"
                        placeholder="Enter Postcode"
                        name="postcode[0]"
                        value={props.values.postcode[0]}
                        onChange={props.handleChange}
                      />
                      {props?.touched?.postcode && props?.errors?.postcode ? (
                        <Error
                          error={props?.errors?.postcode}
                          className="mt-2"
                        />
                      ) : null}
                    </div>
                    <div>
                      <Label required label="Upload Radius One" />
                      <Input
                        className="border-black"
                        placeholder="Enter Radius"
                        name="radius[0]"
                        value={props.values.radius[0]}
                        onChange={props.handleChange}
                      />
                      {props?.touched?.radius && props?.errors?.radius ? (
                        <Error error={props?.errors?.radius} className="mt-2" />
                      ) : null}
                    </div>
                  </div>
                  <div className="pb-3 grid xl:grid-cols-2 xs:gap-5">
                    <div>
                      <Label required label="Upload Postcode Two" />
                      <Input
                        className="border-black"
                        placeholder="Enter Postcode"
                        name="postcode[1]"
                        value={props.values.postcode[1]}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div>
                      <Label required label="Upload Radius Two" />
                      <Input
                        className="border-black"
                        placeholder="Enter Radius"
                        name="radius[1]"
                        value={props.values.radius[1]}
                        onChange={props.handleChange}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="pb-3 grid grid-cols-2 gap-5">
                <div>
                  <Label required label="Nationwide" />
                  <Input
                    type="checkbox"
                    className="border-none !w-fit  !px-0"
                    placeholder="Enter Postcode"
                    name="nation_wide"
                    value={props.values.nation_wide}
                    onChange={props.handleChange}
                  />
                </div>
                <div>
                  <Label required label="Remote Service" />
                  <Input
                    type="checkbox"
                    className="border-none !w-fit !px-0 "
                    placeholder="Enter Radius"
                    name="remote_service"
                    value={props.values.remote_service}
                    onChange={props.handleChange}
                  />
                </div>
              </div>

              <div className=" sticky  bg-slate-100 py-4 bottom-0  border-t-[0.5px] border-t-slate-200 z-40">
                <Error error={error} className="text-center my-1" />
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
                    loading={isLoading}
                    type="submit"
                    variant="filled"
                    color="primary"
                    children="Add Service"
                    centerClassName="flex justify-center items-center"
                    buttonClassName="!px-3 font-poppins py-3 w-full"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default AddServiceModal;
