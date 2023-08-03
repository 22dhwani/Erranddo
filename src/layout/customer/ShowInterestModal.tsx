import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Close from "../../assets/close.tsx";
import Button from "../../components/UI/Button";
import { useTheme } from "../../store/theme-context.tsx";
import Modal from "../home/Modal.tsx";
import { useServices } from "../../store/customer/service-context.tsx";

function ShowInterestModal(props: any) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const requestId = useParams()?.id;

  const { handleShowInterest } = useServices();

  const handleShowInterestAsync = async () => {
    const formData = new FormData();
    formData.append("user_request_id", requestId ?? "");
    formData.append("user_business_id", props?.id ?? "");

    try {
      setIsLoading(true);
      await handleShowInterest(formData);
      props.onCancel();
    } catch (error) {
      console.error(error, "");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg dark:bg-dimGray">
      <button
        className="absolute top-5 right-5"
        onClick={() => {
          props.onCancel();
        }}
      >
        {theme === "light" && <Close color="black" />}
        {theme === "dark" && <Close color="white" />}
      </button>
      <div className="flex flex-col w-full gap-5">
        <h1 className="text-black dark:text-white xl:text-lg md:text-md font-medium text-center mt-7 mb-3">
          Are you sure you want to show interest?
        </h1>

        <div className="flex gap-2 items-center justify-center px-5">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              props.onCancel();
            }}
            type="button"
            centerClassName="flex justify-center dark:text-white"
            buttonClassName="!px-10"
          >
            Cancel
          </Button>
          <Button
            loading={isLoading}
            onClick={handleShowInterestAsync}
            variant="filled"
            color="primary"
            type="button"
            centerClassName="flex justify-center dark:text-white"
            buttonClassName="!px-10"
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ShowInterestModal;
