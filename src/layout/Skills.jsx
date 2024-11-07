import Marquee from "react-fast-marquee";
import SectionsTitle from "../components/Texts/SectionsTitle";
import SkillsInfos from "../utils/SkillInfos";

const Skills = () => {
  return (
    <section id="habilidades" className="bg-dark_blue_200 mt-12 w-full p-4">
      <div className="container mx-auto py-6">
        <SectionsTitle
          heading="Habilidades"
          paragraph="Linguagens, Frameworks e bibliotecas que utilizo no dia a dia"
          detail="."
        />

        <Marquee
          pauseOnHover={true}
          direction="right"
          gradient={true}
          gradientColor="#070811"
          gradientWidth={155}
          speed={50}
          autoFill={true}
        >
          <div className="relative mt-6 flex gap-10 overflow-x-hidden">
            {SkillsInfos.map(({ id, label, path }) => (
              <div
                key={id}
                className="border-blue_300 bg-dark_blue_100 mx-8 flex min-h-[150px] min-w-[180px] flex-col items-center justify-center gap-2 rounded border p-8 font-bold"
              >
                <img
                  loading="lazy"
                  src={path}
                  alt={label}
                  className="duration-400 transition-all ease-in hover:scale-[1.2]"
                />
                <h5 className="text-base sm:text-lg">{label}</h5>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
