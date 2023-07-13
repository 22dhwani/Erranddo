import { useState } from "react";
import Modal from "./Modal";
import Close from "../../assets/close.svg";
import { useFormik } from "formik";
import RegistrationModal from "./RegistrationModal";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Error from "../../components/UI/Error";

function NearlyThere(props: {
  onCancel: () => void;
  open: boolean;
  onCancelAll: () => void;
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (values.name.length === 0) {
        errors.name = "Please enter a valid name";
      }
      return errors;
    },
    onSubmit: (values) => {
      setisLoading(true);
      setTimeout(() => {
        setisLoading(false);
        setOpenModal(true);
      }, 1500);

      console.log(values);
    },
  });
  const [check, setChech] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      {
        <RegistrationModal
          name={formik.values.name}
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
          }}
          onCancelAll={() => {
            setOpenModal(false);
            props.onCancelAll();
          }}
        />
      }
      {props.open && (
        <Modal
          className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px]  dark:bg-dimGray"
          backdropClassName="bg-transparent"
        >
          <button
            className=" absolute top-5 right-5"
            onClick={() => {
              props.onCancelAll();
            }}
          >
            <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
          </button>
          <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-6 gap-2">
            <div className="text-center">
              <h1 className="text-black xl:text-xl md:text-lg xs:text-lg font-bold">
                Nearly There!
              </h1>
            </div>
          </div>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="my-5 ">
              <Input
                type="text"
                placeholder="Full Name"
                className="rounded-lg xl:h-12 lg:h-10 xs:h-10 xl:w-[550px] md:w-[450px] xs:w-full outline-none pl-3 text-[#707070]"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik?.touched?.name && formik?.errors?.name ? (
                <Error error={formik?.errors?.name} />
              ) : null}
            </div>
            <div className="text-sm flex flex-row gap-3 lg:pb-16 xs:pb-10 xl:w-[570px]">
              <input
                type="checkbox"
                checked={check}
                onClick={() => setChech(!check)}
              />
              <div className="">
                I agree to Erranddo’s T&C's and I’m happy to receive occasional
                promotion.
              </div>
            </div>
            <div className="flex gap-5 xl:w-[550px] md:w-[450px] justify-center lg:px-10">
              <Button
                size="normal"
                type="button"
                variant="outlined"
                centerClassName="flex justify-center items-center"
                onClick={() => props.onCancel()}
                buttonClassName="text-black w-11/12 border-[#707070] border  xl:text-lg md:text-sm rounded-xl  text-center "
              >
                Back
              </Button>
              <Button
                loading={isLoading}
                variant="filled"
                color="primary"
                disabled={!check}
                centerClassName="flex justify-center items-center"
                type="submit"
                buttonClassName=" w-11/12 xl:text-lg md:text-sm rounded-xl  disabled:text-slate-400"
              >
                Continue
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}

export default NearlyThere;
