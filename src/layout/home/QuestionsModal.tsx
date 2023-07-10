import { useState } from "react";
import Modal from "./Modal";
import FoundImage from "../../assets/Group 70@3x.png";
import Close from "../../assets/close.svg";
import RegistrationModal from "./RegistrationModal";
import { useFormik } from "formik";
import CommentsModal from "./CommentsModal";
import { BusinessData, Question, QuestionData } from "../../models/home";
import useSWR from "swr";
import { fetcher } from "../../store/home-context";
import FullPageLoading from "../../components/UI/FullPageLoading";
import Error from "../../components/UI/Error";
import NotFoundModal from "./NotFoundModal";
import Button from "../../components/UI/Button";

const ids: { question: number; answer: string }[] = [];
function QuestionsModal(props: {
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  const service = localStorage.getItem("service")
    ? JSON.parse(localStorage.getItem("service") ?? "").id
    : "";
  const postCode = localStorage.getItem("post_code");

  const businessUrl = `https://erranddo.kodecreators.com/api/v1/businesses?post_code_id=${postCode}&service_id=${service}`;
  let datarenderForBusiness: BusinessData[] = [];
  const { data: BusinessData, isLoading: businessLoading } = useSWR(
    businessUrl,
    fetcher
  );
  datarenderForBusiness = BusinessData?.data;
  let error = "";
  if (datarenderForBusiness?.length === 0) {
    error = "No services";
  }
  const url = `https://erranddo.kodecreators.com/api/v1/questions?service_id=${service}&post_code_id=${postCode}&page=1&per_page=10`;
  const dummy_data: Question[] = [];
  let datarender: QuestionData[] = [];
  const {
    data,
    error: ApiError,
    isLoading,
  } = useSWR(error.length === 0 ? url : null, fetcher);
  datarender = data?.data || dummy_data;

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      ids.push({ question: questionNumber, answer: values.content });
    },
  });
  console.log(formik.values.content);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  console.log(ids);
  return (
    <>
      {
        <CommentsModal
          open={openMenu}
          onCancel={() => {
            setOpenMenu(false);
          }}
          onCancelAll={() => {
            setOpenMenu(false);
            setQuestionNumber(0);
            props.onCancelAll();
          }}
        />
      }
      {true && (
        <div>
          {/* {error.length === 0 && !businessLoading ? ( */}
          {true ? (
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
                <img
                  src={Close}
                  alt=""
                  className="md:h-5 md:w-5 xs:h-4 xs:w-4"
                />
              </button>
              {isLoading ? (
                <FullPageLoading className="xl:w-[570px] md:w-[470px] h-96 !bg-transparent" />
              ) : (
                <div>
                  {ApiError ? (
                    <Error error={ApiError} />
                  ) : (
                    <div>
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
                            <span className="text-[#00BF02]">Great news! </span>
                            There are Pro’s available to help
                          </h1>
                        </div>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-9">
                          <h1 className=" xl:text-lg  md:text-md xs:text-sm font-medium p-2 mb-3">
                            {datarender[questionNumber].title}
                          </h1>
                          <div className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 items-center gap-3 xl:w-[550px] md:w-[450px] p-2 pb-20">
                            {datarender[questionNumber]?.answers?.length > 0 &&
                              datarender[questionNumber]?.answers?.map(
                                (d, key) => {
                                  return (
                                    <div
                                      className="flex items-center gap-2"
                                      key={key}
                                    >
                                      <input
                                        key={key}
                                        checked={
                                          d === ids[questionNumber]?.answer
                                            ? true
                                            : false
                                        }
                                        onClick={() => {
                                          setChecked(!checked);
                                          ids.pop();
                                        }}
                                        id="content"
                                        type="radio"
                                        value={d}
                                        onChange={() => {
                                          formik.setFieldValue("content", d);
                                          ids.push({
                                            question: questionNumber,
                                            answer: d,
                                          });
                                        }}
                                        className="xl:w-4 xl:h-4 md:w-3 md:h-3 xs:w-3 xs:h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <label className="xl:mr-3 md:mr-2 xl:text-md  md:text-sm xs:text-xs">
                                        {d}
                                      </label>
                                    </div>
                                  );
                                }
                              )}
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
                            className="text-black  border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 "
                          >
                            Back
                          </button>
                          <Button
                            disabled={
                              formik.values.content.length === 0 ? true : false
                            }
                            variant="filled"
                            color="primary"
                            type="submit"
                            onClick={() => {
                              datarender.length - 1 !== questionNumber
                                ? setQuestionNumber(questionNumber + 1)
                                : setOpenMenu(true);
                            }}
                            buttonClassName="  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Continue
                          </Button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </Modal>
          ) : (
            <NotFoundModal
              onCancel={() => {
                setOpenMenu(false);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

export default QuestionsModal;
