import { useState } from "react";
import Modal from "./Modal";
import FoundImage from "../../assets/Group 70@3x.png";
import Close from "../../assets/close.svg";
import RegistrationModal from "./RegistrationModal";
import { useFormik } from "formik";

const ids: { question: number; answer: string }[] = [];
function QuestionsModal(props: {
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  console.log(ids);
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log("submit");
      ids.push({ question: questionNumber, answer: values.content });
      console.log(ids);
    },
  });
  const questions = ["hello", "hi", "how"];
  const answers = [
    [
      { content: "Upto 50 In", id: 1 },
      { content: "51 - 65 In.", id: 1 },
    ],
    [
      { content: "Upto n", id: 2 },
      { content: "51  In.", id: 2 },
    ],
    [
      { content: "Upto", id: 3 },
      { content: "65 In.", id: 3 },
    ],
  ];
  const [questionNumber, setQuestionNumber] = useState(0);
  const [openRegistration, setOpenRegistration] = useState(false);

  return (
    <>
      {
        <RegistrationModal
          open={openRegistration}
          onCancel={() => {
            setOpenRegistration(false);
          }}
          onCancelAll={() => {
            setOpenRegistration(false);
            setQuestionNumber(0);
            props.onCancelAll();
          }}
        />
      }
      {props.open && (
        <Modal
          className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px]"
          backdropClassName="bg-transparent"
        >
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancelAll();
              setQuestionNumber(0);
            }}
          >
            <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
          </button>
          <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-3 gap-2">
            <div>
              <img
                src={FoundImage}
                alt=""
                className="xl:h-20 xl:w-20 md:h-12 md:w-12 xs:h-12 xs:w-12"
              />
            </div>
            <div className="text-center">
              <h1 className="text-black xl:text-xl md:text-lg xs:text-md font-bold">
                <span className="text-[#00BF02]">Great news! </span>There are
                Pro’s available to help
              </h1>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-9">
              <h1 className=" xl:text-lg  md:text-md xs:text-sm font-medium p-2 mb-3">
                {questions[questionNumber]}
              </h1>
              <div className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 items-center gap-3 xl:w-[550px] md:w-[450px] p-2">
                {answers.length > 0 &&
                  answers[questionNumber]?.map((d) => {
                    return (
                      <div className="flex items-center gap-2">
                        <input
                          checked={
                            d.content === formik.values?.content ? true : false
                          }
                          id="content"
                          type="radio"
                          value={d.content}
                          onChange={formik.handleChange}
                          className="xl:w-4 xl:h-4 md:w-3 md:h-3 xs:w-3 xs:h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="xl:mr-3 md:mr-2 xl:text-md  md:text-sm xs:text-xs">
                          {d.content}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex gap-5 xl:w-[550px] md:w-[450px] justify-center">
              <button
                type="button"
                onClick={() => {
                  questionNumber > 0
                    ? setQuestionNumber(questionNumber - 1)
                    : props.onCancel();
                }}
                className="text-black w-32 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
              >
                Back
              </button>
              <button
                type="submit"
                onClick={() => {
                  questions.length - 1 !== questionNumber
                    ? setQuestionNumber(questionNumber + 1)
                    : setOpenRegistration(true);
                }}
                className="text-white w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Continue
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}

export default QuestionsModal;
