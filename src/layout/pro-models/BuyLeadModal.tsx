import React, { useEffect, useState } from "react";
import Button from "../../components/UI/Button";
import Close from "../../assets/close";
import Modal from "../home/Modal";
import { useTheme } from "../../store/theme-context";
import { useLead } from "../../store/pro/lead-context";
import useSWR from "swr";
import { fetcher } from "../../store/customer/home-context";
import { useNavigate } from "react-router";

const BuyLeadModal = (props: any) => {
  const { theme } = useTheme();
  const { buyLead, page } = useLead();
  const baseUrl = `https://erranddo.kodecreators.com/api/v1/user-requests?for_pro=1&page=${page}&per_page=5`;
  const { mutate } = useSWR(baseUrl, fetcher);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBuy = async () => {
    const formData = new FormData();
    formData.append("user_request_id", props?.id ?? "");
    formData.set("for_pro", "1");
    if (props?.type === "outright") {
      formData.set("is_outright", "1");
    } else {
      formData.set("is_outright", "0");
    }
    await buyLead(formData);
    await mutate();
    try {
      setIsLoading(true);
      await buyLead(formData);
      props.onCancel();
      navigate("/pro/responses");
    } catch (error) {
      console.error(error, "");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg dark:bg-modalDarkColor">
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
          Are you sure you want to buy {props?.type}?
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
            onClick={handleBuy}
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
};

export default BuyLeadModal;
