import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import ProfileImage from "../../../assets/service-image-one.png";
import GreenTick from "../../../assets/GreenTick.svg";
import GreenRoundTick from "../../../assets/GreenRoundTick.svg";
import BlackRoundTick from "../../../assets/BlackRoundTick.svg";
import MyLeadsSkeleton from "../skeleton/Leads/MyLeadsSkeleton";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../../../store/customer/home-context";
import { UserRequestList } from "../../../models/pro/userrequestlist";
import NoImage from "../../../assets/no-photo.png";

function MyLeads() {
  const isLoading = false;

  const leadsId = useParams();
  const dealerdetailurl = `https://erranddo.kodecreators.com/api/v1/user-requests/${leadsId.id}/detail`;
  const { data: leadsDetailData } = useSWR(dealerdetailurl, fetcher);
  const leadsDetail: UserRequestList = leadsDetailData?.data;

  return (
    <div>
      {isLoading ? (
        <MyLeadsSkeleton limit={1} />
      ) : (
        <HomeCard className="rounded-md  px-5 pb-5">
          <div className="py-4 border-b-[0.5px] border-b-slate-200">
            <Heading
              text={`My Leads`}
              variant="subHeader"
              headingclassname="!font-bold  text-textColor  text-xl tracking-wide dark:text-white"
            />
          </div>
          <div className="flex xs:flex-col justify-between py-4 border-b-[0.5px] border-b-slate-200 lg:flex-row">
            <div className="flex items-center gap-2">
              <img
                src={
                  leadsDetail?.user?.img_avatar
                    ? `https://erranddo.kodecreators.com/storage/${leadsDetail?.user?.img_avatar}`
                    : NoImage
                }
                className="w-20 h-20 rounded-full"
              />
              <div className="flex flex-col">
                {leadsDetail?.user_bussiness?.name ? (
                  <Heading
                    text={leadsDetail?.user_bussiness?.name}
                    variant="subTitle"
                    headingclassname="!font-semibold  !text-lg mx-1 tracking-wide dark:text-white "
                  />
                ) : (
                  <Heading
                    text="--"
                    variant="subHeader"
                    headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                )}
                <Heading
                  text={leadsDetail?.service?.name}
                  variant="subHeader"
                  headingclassname="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
                />
              </div>
            </div>
            <Heading
              text={`Posted 10min ago`}
              variant="subHeader"
              headingclassname="!font-medium !text-sm mt-2 text-primaryBlue tracking-wide dark:text-primaryBlue"
            />
          </div>
          <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
            <div>
              <Heading
                text={"Name"}
                variant="subTitle"
                headingclassname="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {leadsDetail?.user?.full_name ? (
                <div className="flex gap-3">
                  <Heading
                    text={leadsDetail?.user?.full_name}
                    variant="subHeader"
                    headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                </div>
              ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )}
            </div>
            <div>
              <Heading
                text={"Location"}
                variant="subTitle"
                headingclassname="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {leadsDetail?.user?.city &&
              leadsDetail?.user?.postcode_id &&
              !null ? (
                <div className="flex gap-3">
                  <Heading
                    text={`${leadsDetail?.user?.city} ,${leadsDetail?.postcode?.name}`}
                    variant="subHeader"
                    headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                </div>
              ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )}
            </div>
          </div>
          <div className="lg:py-4 grid lg:grid-cols-2 border-b-[0.5px] border-b-slate-200 xs:gap-3 lg:gap-0 xs:pb-4 lg:pb-4">
            <div>
              <Heading
                text={"Tel"}
                variant="subTitle"
                headingclassname="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {leadsDetail?.user?.mobile_number ? (
                <div className="flex gap-3">
                  <Heading
                    text={leadsDetail?.user?.mobile_number}
                    variant="subHeader"
                    headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                  {leadsDetail?.user?.is_mobile_verified === "1" && (
                    <img src={GreenTick} alt="Green Tick" />
                  )}
                </div>
              ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )}
            </div>
            <div>
              <Heading
                text={"Name"}
                variant="subTitle"
                headingclassname="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {leadsDetail?.user?.email ? (
                <div className="flex gap-3">
                  <Heading
                    text={leadsDetail?.user?.email}
                    variant="subHeader"
                    headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                  {leadsDetail?.user?.is_email_verified === "1" && (
                    <img src={GreenTick} alt="Green Tick" />
                  )}
                </div>
              ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )}
            </div>
          </div>
          <div className="pt-4">
            <Heading
              text={`Only 4 Pro’s can reply to this lead`}
              variant="subHeader"
              headingclassname="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
            />
            <div className="flex gap-2 my-1 ml-1">
              <img src={GreenRoundTick} />
              <img src={GreenRoundTick} />
              <img src={BlackRoundTick} />
              <img src={BlackRoundTick} />
            </div>
          </div>
        </HomeCard>
      )}
    </div>
  );
}

export default MyLeads;
