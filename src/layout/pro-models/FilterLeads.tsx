import { Formik, FormikErrors } from "formik";
import Modal from "../home/Modal";
import Label from "../../components/UI/Label";
import Input from "../../components/UI/Input";
import { useTheme } from "../../store/theme-context";
import Close from "../../assets/close";
import Button from "../../components/UI/Button";
import { FilterLeads } from "../../models/pro/leadslist";
import { useService } from "../../store/pro/service-context";
import { useLead } from "../../store/pro/lead-context";

function FilterLeadsModal({ onCancel }: { onCancel: () => void }) {
  const { data } = useService();
  const { filter } = useLead();
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
      <Label className="my-3 !font-semibold" label="Enter Business Service" />
      <Formik<FilterLeads>
        initialValues={{
          service_id: [],
          business_id: [],
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);
          const service_ids: number[] = [];
          values.business_id?.forEach((item, key) => {
            if (item) service_ids.push(item);
          });
          filter(service_ids);
          onCancel();
        }}
      >
        {(props) => (
          <form autoComplete="off" onSubmit={props.handleSubmit}>
            <div className="grid grid-cols-3 gap-5 my-3 justify-between">
              {data?.map((item, key) => {
                if (item.service.name)
                  return (
                    <div className="py-1 flex items-center gap-2">
                      <Input
                        id={`business_id[${key}]`}
                        type="checkbox"
                        className="border-none !w-fit  !px-0"
                        name={`business_id[${key}]`}
                        value={item.service_id}
                        onChange={props.handleChange}
                      />

                      <Label
                        className="capitalize"
                        label={item?.service?.name}
                        htmlFor={`business_id[${key}]`}
                      />
                    </div>
                  );
              })}
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
                type="submit"
                variant="filled"
                color="primary"
                children="Filter"
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
