import { Formik } from "formik";
import Modal from "../home/Modal";
import Label from "../../components/UI/Label";
import Input from "../../components/UI/Input";
import { useTheme } from "../../store/theme-context";
import Close from "../../assets/close";
import Button from "../../components/UI/Button";
import { useLead } from "../../store/pro/lead-context";
import SearchBar from "../../components/customer/home/SearchBar";
import { validate } from "uuid";

function InterestFilterModal({ onCancel }: { onCancel: () => void }) {
  const { filterByInterest } = useLead();
  const { theme } = useTheme();

  return (
    <Modal className="bg-slate-100 dark:bg-modalDarkColor opacity-90 rounded-lg  overflow-y-scroll !py-0">
      <button
        className="sticky top-5 right-5 w-full flex justify-end"
        onClick={() => {
          onCancel();
        }}
      >
        {theme === "light" && <div children={<Close color="black" />} />}
        {theme === "dark" && <div children={<Close color="white" />} />}
      </button>
      <Label className="my-3 !font-semibold" label="Filter" />
      <Formik
        initialValues={{
          is_interest_shown: false,
          is_outright: false,
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log("here", values);

          filterByInterest(values);

          onCancel();
        }}
      >
        {(props) => (
          <form autoComplete="off" onSubmit={props.handleSubmit}>
            <div>
              <div className="py-1 flex items-center">
                <SearchBar
                  className="!w-full"
                  key={""}
                  onChange={(key: string) => {
                    console.log("");
                  }}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  id={`is_outright`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  name={`is_outright`}
                  value={props.values.is_outright}
                  checked={props.values.is_outright}
                  onChange={props.handleChange}
                />
                <Label
                  label={"Leads available to Buy Outright"}
                  htmlFor={`is_outright`}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  // id={`is_interest_shown`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  // name={`is_interest_shown`}
                  // value={props.values.is_interest_shown}
                  // checked={props.values.is_interest_shown}
                  // onChange={props.handleChange}
                />
                <Label
                  label={"Today's Lead"}
                  // htmlFor={`is_interest_shown`}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  // id={`is_interest_shown`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  // name={`is_interest_shown`}
                  // value={props.values.is_interest_shown}
                  // checked={props.values.is_interest_shown}
                  // onChange={props.handleChange}
                />
                <Label
                  label={"Customers who have sent you message"}
                  // htmlFor={`is_interest_shown`}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  // id={`is_interest_shown`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  // name={`is_interest_shown`}
                  // value={props.values.is_interest_shown}
                  // checked={props.values.is_interest_shown}
                  // onChange={props.handleChange}
                />
                <Label
                  className=""
                  label={"Customers who have looked at your profile"}
                  // htmlFor={`is_interest_shown`}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  // id={`is_interest_shown`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  // name={`is_interest_shown`}
                  // value={props.values.is_interest_shown}
                  // checked={props.values.is_interest_shown}
                  // onChange={props.handleChange}
                />
                <Label
                  label={"Customers who have requested a quote"}
                  // htmlFor={`is_interest_shown`}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  id={`is_interest_shown`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  name={`is_interest_shown`}
                  value={props.values.is_interest_shown}
                  checked={props.values.is_interest_shown}
                  onChange={props.handleChange}
                />

                <Label
                  label={"Customers that have shown interest"}
                  htmlFor={`is_interest_shown`}
                />
              </div>
              <div className="py-1 flex items-center gap-2">
                <Input
                  // id={`is_interest_shown`}
                  type="checkbox"
                  className="border-none !w-fit !px-0"
                  // name={`is_interest_shown`}
                  // value={props.values.is_interest_shown}
                  // checked={props.values.is_interest_shown}
                  // onChange={props.handleChange}
                />
                <Label
                  label={"Sold out leads"}
                  // htmlFor={`is_interest_shown`}
                />
              </div>
            </div>
            <div className="flex w-full sticky bg-slate-100 dark:bg-modalDarkColor py-4 bottom-0 justify-center gap-5 ">
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

export default InterestFilterModal;
