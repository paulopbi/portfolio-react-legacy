import Proptypes from "prop-types";

const SectionsTitle = ({ heading, paragraph, detail }) => {
  return (
    <>
      <h2 className="mx-auto mb-2 max-w-[40ch] text-center text-3xl font-bold uppercase sm:text-5xl">
        {heading}
      </h2>
      <p className="mx-auto max-w-[70ch] text-center text-base text-gray_200 sm:text-lg">
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
