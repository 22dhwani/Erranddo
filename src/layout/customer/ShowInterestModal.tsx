import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Close from "../../assets/close.tsx";
import Button from "../../components/UI/Button";
import { useTheme } from "../../store/theme-context.tsx";
import Modal from "../home/Modal.tsx";

function ShowInterestModal(props: any) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const requestId = useParams()?.id;

  const url =
    "https://erranddo.kodecreators.com/api/v1/user-requests/showinterest";

  const handleShowInterest = async () => {
    const token = localStorage.getItem("token");

    setIsLoading(true);

    const formData = new FormData();
    formData.set("user_request_id", requestId?.toString() ?? "");
    formData.set("user_business_id", props?.id?.toString() ?? "");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to show interest.");
      }
      navigate(`/services/dealer-detail/${props?.id}`, {
        state: {
          serviceName: props.serviceName,
          serviceId: props.serviceId,
        },
      });
    } catch (error) {
      console.error(error);
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
            onClick={handleShowInterest}
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
