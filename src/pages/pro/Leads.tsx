import { Outlet, useLocation, useParams } from "react-router";
import LeadsBar from "../../components/pro/leads/LeadsBar";
import LeadContextProProvider from "../../store/pro/lead-context";
import Heading from "../../components/UI/Heading";
import Credit from "../../assets/Credit.svg";

function Leads() {
  const id = useParams();
  const location = useLocation();
  return (
    <LeadContextProProvider>
      <div className="xl:mt-[8.651474530831099vh] lg:fixed lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh] lg:pl-60 xs:px-5 lg:px-0 bg-gray-100  dark:bg-black  w-screen h-full pb-20 !lg:overflow-y-hidden xs:overflow-y-scroll">
        <div className="mt-5 lg:mx-5 flex gap-5">
          <div
            className={`lg:w-3/6 lg:inline xs:w-full  ${
              id.id ? "xs:hidden " : "xs:inline  "
            }`}
          >
            <LeadsBar />
          </div>
          <div
            className={`lg:inline  ${
              !id.id ? "xs:hidden" : "xs:inline"
            } xs:w-full`}
          >
            {location.pathname === "/pro/leads" ? (
              <div className="lg:h-[85vh] dark:bg-dimGray bg-white rounded-lg flex  flex-col justify-center items-center gap-5">
                <img src={Credit} className="animate-bounce w-44" />
                <Heading
                  text={` Please click on any lead to view their detail`}
                  variant="subHeader"
                  headingclassname="!font-semibold my-2  text-slate-900 dark:text-white  tracking-wide !text-xl"
                />
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </LeadContextProProvider>
  );
}

export default Leads;
