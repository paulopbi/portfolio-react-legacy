import Proptypes from "prop-types";
import { ButtonPrimary, ButtonSecondary } from "../Buttons/Buttons";
import Badge from "../Texts/Badge";

const Card = ({ ProjectsInfo }) => {
  return (
    <>
      {ProjectsInfo.map(
        ({
          id,
          name,
          path,
          icon,
          label_button,
          description,
          repository,
          demonstration,
          badges,
        }) => (
          <article
            key={id}
            className="blur-effect bg-dark_blue_100 relative min-h-[300px] max-w-[370px] overflow-hidden rounded"
          >
            <div className="relative h-[250px] w-full overflow-hidden">
              <img
                loading="lazy"
                src={path}
                className="duration-400 object-cover transition-all ease-in hover:scale-[1.2]"
                alt={name}
                width={384}
                height={280}
              />
              <div className="absolute bottom-2 left-2 flex w-full items-center justify-items-start gap-2">
                <Badge badges={badges} />
              </div>
            </div>

            <div className="p-3">
              <div className="mb-4 flex min-h-[100px] flex-col items-start justify-between gap-2">
                <h3 className="text-2xl font-bold capitalize">{name}</h3>
                <p className="text-gray_200">{description}</p>
              </div>

              <div className="flex w-full flex-wrap items-center justify-between gap-3">
                {repository ? (
                  <ButtonPrimary
                    label={label_button}
                    icon={icon}
                    link={repository}
                    target="_blank"
                  />
                ) : null}
                {demonstration ? (
                  <ButtonSecondary
                    label="Demo"
                    link={demonstration}
                    target="_blank"
                  />
                ) : null}
              </div>
            </div>
          </article>
        ),
      )}
    </>
  );
};

Card.propTypes = {
  ProjectsInfo: Proptypes.array,
};

export default Card;
