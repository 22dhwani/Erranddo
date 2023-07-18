import Modal from "../home/Modal";
import Input from "../../components/UI/Input";
import { useTheme } from "../../store/theme-context";
import Close from "../../assets/close";

const CustomerChatModal = (props: { onCancel: () => void }) => {
  const { theme } = useTheme();
  const inputClassName =
    "items-center w-full text-md md:w-full text-slate-700 border-slate-500 outline-none  font-medium font-poppins     border rounded-lg    ease-in focus:caret-slate-500  lg:mr-3";
  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px] dark:bg-dimGray 2xl:h-[87vh] md:h-[90vh] xl:mt-20 md:mt-6">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          props.onCancel();
        }}
      >
        {theme === "light" && <div children={<Close color="black" />} />}

        {theme === "dark" && <div children={<Close color="white" />} />}
      </button>
      <div className="xl:my-5 md:my-2 p-4 h-full">
        <div className="xl:w-[510px] md:w-[410px] h-[70vh] bg-slate-500 rounded-lg"></div>
        <div className=" xl:w-[510px] md:w-[410px] h-12">
          <Input
            id="name"
            placeholder="Chat"
            // value={props.values.name}
            className={inputClassName}
            // onChange={props.handleChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CustomerChatModal;
