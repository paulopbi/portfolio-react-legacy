import { ButtonPrimary, ButtonSecondary } from "../components/Buttons/Buttons";

const Hero = () => {
  return (
    <>
      <main
        id="sobre"
        className="container mx-auto mt-[70px] flex flex-col items-center justify-center gap-6 p-4 md:flex-row"
      >
        <div className="max-h-[400px] max-w-[400px] flex-1 overflow-hidden rounded">
          <img
            loading="lazy"
            src="src/assets/my_picture.jpg"
            alt="Minha foto"
            className="duration-400 w-full object-cover transition-all ease-in hover:scale-[1.2]"
            width={400}
            height={415}
          />
        </div>
        <div className="flex max-h-[400px] max-w-[500px] flex-1 flex-col gap-2">
          <span className="text-blue_300 text-xs uppercase">Quem sou?</span>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Paulo Victor Silva Rosa
          </h1>
          <span className="text-lg font-medium text-gray-100">
            Desenvolvedor Frontend
          </span>
          <p className="text-gray_200 max-w-[60ch] text-sm sm:text-base">
            Olá! Me chamo Paulo Victor, sou formado em Análise e Desenvolvimento
            de Sistemas pela Unicesumar, com domínio das principais ferramentas
            do mercado de Frontend e UI Design. Tenho experiência para
            Desenvolver Interfaces intuitivas, eficientes, além do Design
            criando protótipos ou projetos completos para criar experiências
            visuais envolventes
            <span className="text-primary_100">.</span>
          </p>
          <div className="flex gap-3">
            <ButtonPrimary
              label="Curriculo"
              link="src/assets/curriculo_paulo_victor.pdf"
              icon="src/assets/download_icon.svg"
            />
            <ButtonSecondary label="Contatos" link="#contatos" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
