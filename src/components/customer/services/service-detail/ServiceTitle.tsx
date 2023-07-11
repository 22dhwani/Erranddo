import { useState } from "react";
import CloseRequestModal from "../../../../layout/close-request-modals/CloseRequestModal";
import Button from "../../../UI/Button";
import Heading from "../../../UI/Heading";
import { Request } from "../../../../models/customer/requestlist";

function ServiceTitle(props: { data: Request }) {
  const requestDate = props?.data?.service?.created_at
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {
        <CloseRequestModal
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
          }}
          onCancelAll={() => {
            setOpenModal(false);
          }}
        />
      }
      <div className="flex justify-between lg:py-5 xs:py-4 items-center">
        <div>
          <Heading
            variant="headingTitle"
            text={props?.data?.service?.name + " - " + requestDate.split("T")[0]}
            headingclassName="text-primaryBlue !font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor "
          />
        </div>
        <div>
          <Button
            variant="filled"
            color="secondary"
            size="normal"
            children="Close Request"
            buttonClassName="!px-4 py-2 text-sm tracking-wide md:flex xs:hidden"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
    </>
  );
}

export default ServiceTitle;
