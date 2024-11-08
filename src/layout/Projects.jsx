import { Card } from "../components/Cards/Card";
import SectionsTitle from "../components/Texts/SectionsTitle";
import ProjectsInfo from "../utils/ProjectsInfo";
import ORNAMENT from "../assets/ornament.svg";

const Projects = () => {
  return (
    <section
      id="projetos"
      className="container relative mx-auto my-10 w-full p-4"
    >
      <SectionsTitle
        heading="Projetos"
        paragraph="Demonstrações dos projetos de Programação e UI Design"
        detail="."
      />

      <div className="my-10 flex flex-wrap items-stretch justify-center gap-x-6 gap-y-8">
        <Card ProjectsInfo={ProjectsInfo} />
      </div>

      {/* ornament bottom */}
      <div className="absolute bottom-0 left-4 hidden xl:block">
        <img src={ORNAMENT} alt="Website detail" />
      </div>

      {/* ornament top */}
      <div className="absolute right-4 top-0 hidden xl:block">
        <img src={ORNAMENT} alt="Website detail" />
      </div>
    </section>
  );
};

export default Projects;
