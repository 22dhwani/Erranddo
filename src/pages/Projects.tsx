import ProjectsDetailMainPage from "../components/services/projects/ProjectsDetailMainPage";
import TopBar from "../components/services/top-bar/TopBar";

function Projects() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <div className="xl:mt-[8.651474530831099vh] lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh]">
        <ProjectsDetailMainPage />
      </div>
    </div>
  );
}

export default Projects;
