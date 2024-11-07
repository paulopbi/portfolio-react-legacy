import Proptypes from "prop-types";

const SectionsTitle = ({ heading, paragraph, detail }) => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold uppercase sm:text-5xl">
        {heading}
      </h2>
      <p className="text-gray_200 text-center text-base sm:text-lg">
        {paragraph}
        {detail ? <span className="text-primary_100">{detail}</span> : null}
      </p>
    </>
  );
};

SectionsTitle.propTypes = {
  heading: Proptypes.string,
  paragraph: Proptypes.string,
  detail: Proptypes.string,
};

export default SectionsTitle;
