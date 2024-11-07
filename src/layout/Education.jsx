import SectionsTitle from "../components/Texts/SectionsTitle";
import { EducationCard } from "../components/Cards/Card";
import EducationInfos from "../utils/EducationInfos";

const Education = () => {
  return (
    <section
      id="estudos"
      className="bg-dark_blue_200 mb-10 min-h-[400px] w-full p-4 py-6"
    >
      <SectionsTitle
        heading="Estudos"
        paragraph="Escolaridade, idiomas e cursos"
        detail="."
      />

      <div className="mt-8 flex flex-wrap items-start justify-center gap-6">
        <EducationCard EducationInfos={EducationInfos} />
      </div>
    </section>
  );
};

export default Education;
