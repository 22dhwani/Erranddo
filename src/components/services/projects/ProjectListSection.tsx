import CurrentProjects from "../../../assets/green-box.svg";
import CompletedProjects from "../../../assets/yellow-box.svg";

import Heading from "../../UI/Heading";
import CompletedProjectTable from "./CompletedProjectTable";
import CurrentProjectTable from "./CurrentProjectTable";

function ProjectListSection() {
  const headingClass =
    "!font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor !lg:text-2xl";
  return (
    <div className="flex xs:flex-col lg:flex-row w-full justify-between lg:gap-10">
      <div className="lg:w-3/6 xs:w-full">
        <div className="py-5 flex items-center justify-center  border-b-[0.5px] border-b-slate-300">
          <div className="flex items-center gap-6">
            <img src={CurrentProjects} className="lg:w-12 xs:w-8" />
            <Heading
              variant="headingTitle"
              text={`Current Projects (02)`}
              headingclassName={`text-primaryGreen dark:text-primaryGreen ${headingClass}`}
            />
          </div>
        </div>
        <CurrentProjectTable />
      </div>
      <div className="lg:w-3/6 xs:w-full">
        <div className="py-5 flex items-center justify-center  border-b-[0.5px] border-b-slate-300">
          <div className="flex items-center gap-6">
            <img src={CompletedProjects} className="lg:w-12 xs:w-8" />
            <Heading
              variant="headingTitle"
              text={`Completed Projects (02)`}
              headingclassName={`text-primaryYellow dark:text-primaryYellow ${headingClass}`}
            />
          </div>
        </div>
        <CompletedProjectTable />
      </div>
    </div>
  );
}

export default ProjectListSection;
