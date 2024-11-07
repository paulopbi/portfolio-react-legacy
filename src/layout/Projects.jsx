import { Card } from "../components/Cards/Card";
import SectionsTitle from "../components/Texts/SectionsTitle";
import ProjectsInfo from "../utils/ProjectsInfo";

const Projects = () => {
  return (
    <section id="projetos" className="container mx-auto my-10 w-full p-4">
      <SectionsTitle
        heading="Projetos"
        paragraph="Demonstrações dos projetos de Programação e UI Design"
        detail="."
      />

      <div className="my-10 flex flex-wrap items-stretch justify-center gap-x-6 gap-y-8">
        <Card ProjectsInfo={ProjectsInfo} />
      </div>
    </section>
  );
};

export default Projects;
