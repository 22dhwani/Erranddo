import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Credit from "../../../assets/Credit.svg";
import NoImage from "../../../assets/no-photo.png";

import Button from "../../UI/Button";
import LeadsDetailSkeleton from "../skeleton/Leads/LeadsDetailSkeleton";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../../../store/customer/home-context";
import { LeadsDetail } from "../../../models/pro/leadsdetail";
import { UserRequestList } from "../../../models/pro/userrequestlist";
import { useLead } from "../../../store/pro/lead-context";
import { useState } from "react";
import BuyLeadModal from "../../../layout/pro-models/BuyLeadModal";

function LeadDetails() {
  const isLoading = false;
  const leadsId = useParams();
  const dealerdetailurl = `https://erranddo.kodecreators.com/api/v1/user-requests/${leadsId.id}/detail`;
  const { data: leadsDetailData } = useSWR(dealerdetailurl, fetcher);
  const leadsDetail: UserRequestList = leadsDetailData?.data;
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showOutrightModal, setShowOutrightModal] = useState(false);
  return (
    <div>
      {showLeadModal && (
        <BuyLeadModal
          onCancel={() => {
            setShowLeadModal(false);
          }}
          id={leadsId?.id}
          type="lead"
        />
      )}
      {showOutrightModal && (
        <BuyLeadModal
          onCancel={() => {
            setShowOutrightModal(false);
          }}
          id={leadsId?.id}
          type="outright"
        />
      )}
      {isLoading ? (
        <LeadsDetailSkeleton limit={1} />
      ) : (
        <HomeCard className="rounded-md  px-5 pb-10 mt-5">
          <div className="py-4 border-b-[0.5px] border-b-slate-200">
            <Heading
              text={`Leads Details`}
              variant="subHeader"
              headingclassname="!font-bold  text-textColor  text-xl tracking-wide dark:text-white"
            />
          </div>
          <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-6">
            {leadsDetail?.answers?.length ? (
              leadsDetail?.answers.map((answer) => (
                <div key={answer.id}>
                  <Heading
                    text={answer.question.title}
                    variant="subTitle"
                    headingclassname="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-slate-400 "
                  />
                  <Heading
                    text={answer.answer}
                    variant="subHeader"
                    headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                </div>
              ))
            ) : (
              <div>
                <Heading
                  text={"No data available"}
                  variant="subHeader"
                  headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              </div>
            )}
          </div>
          <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
            <div>
              <Heading
                text={"Comments / Photos"}
                variant="subTitle"
                headingclassname="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-slate-400 "
              />
              <Heading
                text={leadsDetail?.comment}
                variant="subHeader"
                headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
              />
            </div>
          </div>
          <div className="py-4 flex justify-between gap-5">
            <div>
              <img
                src={
                  leadsDetail?.file
                    ? `https://erranddo.kodecreators.com/storage/${leadsDetail?.file}`
                    : NoImage
                }
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
          </div>
          <div className="py-4 flex lg:flex-row xs:flex-col justify-between gap-5">
            <div className="flex w-full items-center gap-3">
              <img src={Credit} className="w-5 h-5 object-cover" />
              <Heading
                text={`3 credits`}
                variant="subHeader"
                headingclassname="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
              />
              <Button
                variant="filled"
                color="secondary"
                size="normal"
                children="Buy Leads"
                buttonClassName="!px-4 py-2 text-sm tracking-wide"
                onClick={() => setShowLeadModal(!showLeadModal)}
              />
            </div>
            <div className="flex w-full items-center gap-3">
              <img src={Credit} className="w-5 h-5 object-cover" />
              <Heading
                text={`6 credits`}
                variant="subHeader"
                headingclassname="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
              />
              <Button
                variant="filled"
                color="secondary"
                size="normal"
                children="Buy Outright"
                buttonClassName="!px-4 py-2 text-sm tracking-wide"
                onClick={() => setShowOutrightModal(!showOutrightModal)}
              />
            </div>
          </div>
          <div className=" relative w-full">
            <div className="absolute flex lg:right-0">
              <Heading
                text={`Why share this lead?`}
                variant="subHeader"
                headingclassname="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
              />
              <Heading
                text={`BUY OUTRIGHT`}
                variant="subHeader"
                headingclassname="!font-normal !text-sm mx-1 text-primaryYellow tracking-wide dark:text-primaryYellow"
              />
            </div>
          </div>
        </HomeCard>
      )}
    </div>
  );
}

export default LeadDetails;
