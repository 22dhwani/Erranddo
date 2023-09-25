import { useLocation, useParams } from "react-router";
import Button from "../../../UI/Button";
import Heading from "../../../UI/Heading";
import { useState } from "react";
import ShowInterestModal from "../../../../layout/customer/ShowInterestModal";
import RequestQuoteModal from "../../../../layout/customer/RequestQuoteModal";

function PhotosTitle(props: any) {
  const businessId = useParams();
  const location = useLocation();
  const state = location.state;
  const userIntrests = props?.data?.user_request_intrests;
  const isInterested = userIntrests?.filter((d: any) => {
    return d?.user_request_id == state?.userRequestId;
  });
  const isQuote = userIntrests?.filter((d: any) => {
    ("");
  });

  const [showModal, setShowModal] = useState(false);

  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="flex justify-between lg:py-5 xs:py-4 items-center">
      {showQuoteModal && (
        <RequestQuoteModal
          onCancel={() => {
            setShowQuoteModal(false);
          }}
          id={businessId?.id}
        />
      )}
      {showModal && (
        <ShowInterestModal
          onCancel={() => {
            setShowModal(false);
          }}
          id={businessId?.id}
          userRequestId={state?.userRequestId}
        />
      )}
      <div>
        <Heading
          variant="headingTitle"
          text="Photos"
          headingclassname="text-textColor !font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor"
        />
      </div>
      <div className=" items-center xs:hidden lg:flex">
        {isQuote?.length > 0 ? (
          <Button
            variant="filled"
            color="secondary"
            size="normal"
            children="Quote Requested"
            buttonClassName="!px-4 py-2 text-sm tracking-wide lg:flex xs:hidden bg-slate-400 cursor-not-allowed hover:bg-slate-400"
          />
        ) : (
          <Button
            onClick={() => setShowQuoteModal(!showQuoteModal)}
            variant="filled"
            color="secondary"
            size="normal"
            children="Request Quote"
            buttonClassName="!px-4 py-2 text-sm tracking-wide lg:flex xs:hidden"
          />
        )}
        {isInterested?.length > 0 ? (
          <Button
            variant="filled"
            color="primary"
            size="normal"
            children="Shown interest"
            buttonClassName="!px-4 py-2 text-sm tracking-wide lg:flex xs:hidden bg-slate-400 cursor-not-allowed hover:bg-slate-400"
          />
        ) : (
          <Button
            onClick={() => setShowModal(!showModal)}
            variant="filled"
            color="primary"
            size="normal"
            children="Show interest"
            buttonClassName="!px-4 py-2 text-sm tracking-wide lg:flex xs:hidden"
          />
        )}
      </div>
    </div>
  );
}

export default PhotosTitle;
