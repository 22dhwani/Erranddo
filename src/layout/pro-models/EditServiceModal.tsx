import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import Label from "../../components/UI/Label";
import Button from "../../components/UI/Button";
import { Formik, FormikErrors } from "formik";
import Error from "../../components/UI/Error";
import Heading from "../../components/UI/Heading";
import { EditBusinessService, ServiceData } from "../../models/pro/business";
import { useBusiness } from "../../store/pro/dashboard-context";

import useSWR from "swr";
import { fetcher } from "../../store/customer/home-context";
import Input from "../../components/UI/Input";

import { ServiceDataDetail } from "../../models/pro/service";
import EditDropdownCompoenet from "../../components/UI/EditDropdown";
import DropdownCompoenet from "../../components/UI/Dropdown";
import { useService } from "../../store/pro/service-context";
import { useEffect } from "react";
import PostCodeDropDown from "../../components/UI/PostCodeDropDown";

function EditServiceModal({
  onCancel,
  serviceId,
}: {
  onCancel: () => void;
  serviceId: number;
}) {
  const serviceDataUrl = `https://erranddo.kodecreators.com/api/v1/business-services/${serviceId}/detail`;
  const { data: oldData } = useSWR(serviceDataUrl, fetcher);
  const oldServiceData: ServiceDataDetail = oldData?.data;
  const oldPostCodeData: string[] = [];
  const oldRadiusData: string[] = [];
  if (oldServiceData) {
    oldServiceData?.post_codes?.map((d) =>
      oldPostCodeData.push(d?.postcode?.name)
    );
    oldServiceData?.post_codes?.map((d) => oldRadiusData.push(d?.radius));
  }

  //handling business dropdown
  const { data, editServiceBusiness, error, isLoading, setError } =
    useBusiness();
  useEffect(() => {
    setError("");
  }, []);
  const { data: serviceData, page } = useService();
  const id = JSON.parse(localStorage.getItem("data") ?? "").id;

  const validate = (values: EditBusinessService) => {
    const errors: FormikErrors<EditBusinessService> = {};
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

  const business = data?.filter(
    (item) => item.id === oldServiceData?.user_business_id
  );

  const serviceBusiness = serviceData?.filter(
    (item: any) => item.id === oldServiceData?.id
  );
  useEffect(() => {
    setError("");
  }, []);
  return (
    <Modal
      className="bg-slate-100 dark:bg-modalDarkColor opacity-90 xs:w-[90vw] rounded-lg max-h-[30rem] h-[30rem]  overflow-y-scroll !py-0  lg:!w-[45vw] lg:!px-0 soft-searchbar"
      overlayClassName="!w-full"
    >
      <div className="pt-7 h-full lg:!px-5">
        <Heading
          headingclassname="mt-3  text-textColor text-lg !font-semibold dark:text-white"
          variant="subHeader"
          text="Edit Service"
        />
        <Formik<EditBusinessService>
          initialValues={{
            user_business_id: oldServiceData?.user_business_id,
            service_id: serviceId,
            radius: [...oldRadiusData],
            postcode: [...oldPostCodeData],
            nation_wide: oldServiceData?.nation_wide === 0 ? false : true,
            remote_service: oldServiceData?.remote_service === 0 ? false : true,
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
            console.log(values);
            editServiceBusiness(formData, serviceId);

            onCancel();
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
                <Label required label="Update Business" />
                <DropdownCompoenet
                  value={
                    business
                      ? { value: business[0]?.id, label: business[0]?.name }
                      : undefined
                  }
                  className="my-2 !z-30 relative dark:bg-black"
                  isImage={true}
                  placeholder="Select A business"
                  options={[]}
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
                <Label required label="Update Business Services" />
                <DropdownCompoenet
                  value={
                    serviceBusiness
                      ? {
                          value: serviceBusiness[0]?.service?.id,
                          label: serviceBusiness[0]?.service?.name,
                        }
                      : undefined
                  }
                  className="my-2 !z-30 relative "
                  isImage={true}
                  placeholder="Select A business"
                  options={[]}
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
                  <PostCodeDropDown
                    value={
                      props?.values?.postcode[0]
                        ? {
                            label: props?.values?.postcode[0],
                            value: props?.values?.postcode[0],
                          }
                        : undefined
                    }
                    className="my-2 !z-10 relative h-max"
                    onChange={(newValue) => {
                      console.log("here");

                      props.setFieldValue("postcode[0]", newValue.value);
                    }}
                  />

                  {props?.touched?.postcode && props?.errors?.postcode ? (
                    <Error error={props?.errors?.postcode} className="mt-2" />
                  ) : null}
                </div>
              ) : (
                <div>
                  <div className="pb-3 grid xl:grid-cols-2 xs:gap-5">
                    <div>
                      <Label required label="Update Postcode One" />
                      <PostCodeDropDown
                        value={
                          props?.values?.postcode[0]
                            ? {
                                label: props?.values?.postcode[0],
                                value: props?.values?.postcode[0],
                              }
                            : undefined
                        }
                        className="my-2 !z-10 relative h-max"
                        onChange={(newValue) => {
                          props.setFieldValue("postcode[0]", newValue.value);
                        }}
                      />
                      {props?.touched?.postcode && props?.errors?.postcode ? (
                        <Error
                          error={props?.errors?.postcode}
                          className="mt-2"
                        />
                      ) : null}
                    </div>
                    <div>
                      <Label required label="Update Radius One" />
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
                      <Label required label="Update Postcode Two" />
                      <PostCodeDropDown
                        value={
                          props?.values?.postcode[1]
                            ? {
                                label: props?.values?.postcode[1],
                                value: props?.values?.postcode[1],
                              }
                            : undefined
                        }
                        className="my-2 !z-10 relative h-max"
                        onChange={(newValue) => {
                          props.setFieldValue("postcode[1]", newValue.value);
                        }}
                      />
                    </div>
                    <div>
                      <Label required label="Update Radius Two" />
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
                    name="nation_wide"
                    checked={props.values.nation_wide}
                    value={props.values.nation_wide}
                    onChange={props.handleChange}
                  />
                </div>
                <div>
                  <Label required label="Remote Service" />
                  <Input
                    type="checkbox"
                    className="border-none !w-fit !px-0 "
                    name="remote_service"
                    checked={props.values.remote_service}
                    value={props.values.remote_service}
                    onChange={props.handleChange}
                  />
                </div>
              </div>

              <div className=" sticky  bg-slate-100 py-4 bottom-0  border-t-[0.5px] border-t-slate-200 z-40 dark:bg-dimGray">
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
                    children="Edit Service"
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

export default EditServiceModal;
