import Modal from "../home/Modal";
import Close from "../../assets/close.tsx";
import { useFormik } from "formik";
import Heading from "../../components/UI/Heading";
import StarRatings from "../../components/UI/StarRatings";
import { useTheme } from "../../store/theme-context";

function ReviewModal(props: {
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  const formik = useFormik({
    initialValues: {
      postCode: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (values.postCode.toString().length === 0) {
        errors.postCode = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { theme } = useTheme();
  return (
    <>
      {props.open && (
        <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[470px] md:w-[370px] dark:bg-dimGray">
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancelAll();
            }}
          >
            {theme === "light" && <div children={<Close color="black" />} />}

            {theme === "dark" && <div children={<Close color="white" />} />}
          </button>
          <div className="flex flex-col items-center xl:w-[450px] md:w-[350px] xl:mt-1 md:mt-2 p-3 gap-2">
            <div className="flex flex-col items-center xl:w-[450px] md:w-[300px] xl:mt-1 md:mt-2 p-6 gap-2">
              <div className="text-center">
                <Heading variant="bigTitle" text="Leave TV Guru LTD a review" />
              </div>
            </div>
            <div className="flex flex-col gap-3 xl:w-[450px] justify-center items-center xs:w-[350px]">
              <StarRatings />
            </div>
            <div className="pb-7 xs:w-full xl:pl-0 md:pl-3">
              <Heading
                variant="headingTitle"
                text="TV Wall Mounting"
                headingclassName="xs:text-md text-center"
              />
            </div>
            <div className=" xs:w-full xl:pl-0 md:pl-3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Write Your Review here
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="flex pb-5 xs:w-full xl:pl-0 md:pl-3 justify-center items-center gap-3">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <Heading
                variant="smallTitle"
                text="I confirm the information above is accurate"
                headingclassName="text-slate-500 text-center xs:text-xs"
              />
            </div>
            <div className="flex gap-5 xl:w-[450px] md:w-[350px] justify-around md:pl-0 xs:pl-4">
              <button
                type="button"
                onClick={() => {
                  props.onCancel();
                }}
                className="text-black dark:text-white w-36 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
              >
                Back
              </button>
              <button
                type="submit"
                className="text-white w-36 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-2 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close Request
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ReviewModal;
