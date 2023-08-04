import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import ProfileImage from "../../../assets/service-image-one.png";
import GreenTick from "../../../assets/GreenTick.svg";
import GreenRoundTick from "../../../assets/GreenRoundTick.svg";
import BlackRoundTick from "../../../assets/BlackRoundTick.svg";
import MyLeadsSkeleton from "../skeleton/Leads/MyLeadsSkeleton";
import Button from "../../UI/Button";
import { useNavigate } from "react-router";

function MyResponses() {
  const isLoading = false;
  const navigate = useNavigate();

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
              headingclassName="!font-bold  text-textColor  text-xl tracking-wide dark:text-white"
            />
          </div>
          <div className="flex justify-between py-4 border-b-[0.5px] border-b-slate-200 ">
            <div className="flex items-center gap-2">
              <img src={ProfileImage} className="" />
              <div className="flex flex-col">
                {/* {leadsDetail?.user_bussiness?.name ? ( */}
                <Heading
                  text={"Durva Laxmi Vasan Bhandar"}
                  variant="subTitle"
                  headingclassName="!font-semibold  !text-lg mx-1 tracking-wide dark:text-white "
                />
                {/* ) : (
                  <Heading
                    text="--"
                    variant="subHeader"
                    headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                )} */}
                <Heading
                  //   text={leadsDetail?.service?.name}
                  text={"Platic Items"}
                  variant="subHeader"
                  headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Heading
                text={`Posted 10min ago`}
                variant="subHeader"
                headingclassName="!font-medium !text-sm mt-2 text-primaryBlue tracking-wide dark:text-white"
              />
              {/* <Heading
                text={`Messages`}
                variant="subHeader"
                headingclassName="!font-medium !text-sm mt-2 text-primaryBlue tracking-wide dark:text-white"
              /> */}
              <div className="flex gap-2">
                <Button
                  variant="filled"
                  color="primary"
                  size="normal"
                  children="Message"
                  buttonClassName="!px-6"
                  centerClassName="flex items-center justify-center"
                  onClick={() => navigate("/pro/responses/chat/:id")}
                />

                <Button
                  variant="outlined"
                  color="primary"
                  size="normal"
                  children="Notes"
                  buttonClassName="!px-6"
                  centerClassName="flex items-center justify-center"
                  onClick={() => navigate("/pro/responses/notes/:id")}
                />
              </div>
            </div>
          </div>
          <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
            <div>
              <Heading
                text={"Name"}
                variant="subTitle"
                headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {/* {leadsDetail?.user?.full_name ? ( */}
              <div className="flex gap-3">
                <Heading
                  //   text={leadsDetail?.user?.full_name}
                  text={"Durva Brahmbhatt"}
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              </div>
              {/* ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )} */}
            </div>
            <div>
              <Heading
                text={"Location"}
                variant="subTitle"
                headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {/* {leadsDetail?.user?.city &&
              leadsDetail?.user?.postcode_id &&
              !null ? ( */}
              <div className="flex gap-3">
                <Heading
                  //   text={`${leadsDetail?.user?.city} ,${leadsDetail?.user?.postcode_id}`}
                  text={"Mangal Bazar"}
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              </div>
              {/* ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )} */}
            </div>
          </div>
          <div className="lg:py-4 grid lg:grid-cols-2 border-b-[0.5px] border-b-slate-200 xs:gap-3 lg:gap-0 xs:pb-4 lg:pb-4">
            <div>
              <Heading
                text={"Tel"}
                variant="subTitle"
                headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {/* {leadsDetail?.user?.mobile_number ? ( */}
              <div className="flex gap-3">
                <Heading
                  // text={leadsDetail?.user?.mobile_number}
                  text={"987654215"}
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
                {/* {leadsDetail?.user?.is_mobile_verified === "1" && ( */}
                <img src={GreenTick} alt="Green Tick" />
                {/* )} */}
              </div>
              {/* ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )} */}
            </div>
            <div>
              <Heading
                text={"Email"}
                variant="subTitle"
                headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-white "
              />
              {/* {leadsDetail?.user?.email ? ( */}
              <div className="flex gap-3">
                <Heading
                  // text={leadsDetail?.user?.email}
                  text={"contact@durvalaxmi.com"}
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
                {/* {leadsDetail?.user?.is_email_verified === "1" && ( */}
                <img src={GreenTick} alt="Green Tick" />
                {/* )} */}
              </div>
              {/* ) : (
                <Heading
                  text="--"
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              )} */}
            </div>
          </div>
          <div className="pt-4">
            <Heading
              text={`Only 4 Pro’s can reply to this lead`}
              variant="subHeader"
              headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
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

export default MyResponses;
