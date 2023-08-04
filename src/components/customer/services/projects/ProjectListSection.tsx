import useSWR from "swr";
import CurrentProjects from "../../../../assets/green-box.svg";
import CompletedProjects from "../../../../assets/yellow-box.svg";
import Heading from "../../../UI/Heading";
import CompletedProjectTable from "./CompletedProjectTable";
import CurrentProjectTable from "./CurrentProjectTable";
import DataNotFound from "../../../../assets/dataNotFound.png";
import { fetcher } from "../../../../store/customer/home-context";
import { Request } from "../../../../models/customer/requestlist";

function ProjectListSection() {
  const localdata = localStorage.getItem("data");
  let userData;
  if (localdata) {
    userData = JSON.parse(localdata);
  }
  console.log(userData?.id);

  const url = `https://erranddo.kodecreators.com/api/v1/user-requests?page=1&per_page=100&user_id=${userData?.id}`;
  const { data } = useSWR(url, fetcher);
  const requestData: Request[] = data?.data ?? [];
  let currentProjectsCount = 0;
  let completedProjectsCount = 0;
  requestData?.map((d) => {
    if (d?.status === "PENDING") {
      currentProjectsCount++;
    } else if (d?.status === "COMPLETED") {
      completedProjectsCount++;
    }
  });
  const headingClass =
    "!font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor !lg:text-2xl";
  return (
    <div className="flex xs:flex-col lg:flex-row w-full justify-between lg:gap-10 dark:text-white">
      <div className="lg:w-3/6 xs:w-full">
        <div className="py-5 flex items-center justify-center  border-b-[0.5px] dark:border-b-lineColor border-b-slate-300">
          <div className="flex items-center gap-6">
            <img src={CurrentProjects} className="lg:w-12 xs:w-8" />
            <Heading
              variant="headingTitle"
              text={`Current Projects (${currentProjectsCount.toString().length < 2
                ? "0" + currentProjectsCount
                : currentProjectsCount
                })`}
              headingclassName={`text-primaryGreen dark:text-primaryGreen ${headingClass}`}
            />
          </div>
        </div>
        {currentProjectsCount > 0 ? (
          <CurrentProjectTable data={requestData} />
        ) : (
          <div className="flex flex-col items-center justify-center h-max xs:py-10 ">
            <img src={DataNotFound} className="" />
            <Heading
              text="Data Not Found"
              variant="subTitle"
              headingclassName="text-primaryGreen dark:text-primaryGreen !font-bold tracking-wide text-md"
            />
          </div>
        )}
      </div>
      <div className="lg:w-3/6 xs:w-full">
        <div className="py-5 flex items-center justify-center  border-b-[0.5px] dark:border-b-lineColor border-b-slate-300">
          <div className="flex items-center gap-6">
            <img src={CompletedProjects} className="lg:w-12 xs:w-8" />
            <Heading
              variant="headingTitle"
              text={`Completed Projects (${completedProjectsCount.toString().length < 2
                ? "0" + completedProjectsCount
                : completedProjectsCount
                })`}
              headingclassName={`text-primaryYellow dark:text-primaryYellow ${headingClass}`}
            />
          </div>
        </div>
        {completedProjectsCount > 0 ? (
          <CompletedProjectTable data={requestData} />
        ) : (
          <div className="flex flex-col items-center justify-center h-max xs:py-10 ">
            <img src={DataNotFound} className="" />
            <Heading
              text="Data Not Found"
              variant="subTitle"
              headingclassName="text-primaryYellow dark:text-primaryYellow !font-bold tracking-wide text-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectListSection;
