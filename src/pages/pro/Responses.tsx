import { Outlet, useParams } from "react-router";
import ResponsesBar from "../../components/pro/responses/ResponsesBar";
import LeadContextProProvider from "../../store/pro/lead-context";
import LeadsResponseProvider from "../../store/pro/response-context";

function Responses() {
  const id = useParams();
  return (
    <LeadContextProProvider>
      <LeadsResponseProvider>
        <div className="xl:mt-[8.651474530831099vh] lg:fixed lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh] lg:pl-60 xs:px-5 lg:px-0 bg-gray-100  dark:bg-black  w-screen h-full pb-20 !lg:overflow-y-hidden xs:overflow-y-scroll">
          <div className="mt-5 lg:mx-5 flex gap-5">
            <div
              className={`lg:w-3/6 lg:inline xs:w-full  ${id.id ? "xs:hidden " : "xs:inline  "
                }`}
            >
              <ResponsesBar />
            </div>
            <div
              className={`lg:inline  ${!id.id ? "xs:hidden" : "xs:inline"
                } xs:w-full`}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </LeadsResponseProvider>
    </LeadContextProProvider>
  );
}

export default Responses;
