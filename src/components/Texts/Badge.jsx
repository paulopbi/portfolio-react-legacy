import Proptypes from "prop-types";

const Badge = ({ badges }) => {
  return (
    <>
      {badges.map((badgeItems) => (
        <span
          key={badgeItems}
          className="bg-secondary_100 text-secondary_200 flex items-center justify-around gap-2 rounded px-2 py-1 text-[12px] font-bold uppercase tracking-wider"
        >
          {badgeItems}
        </span>
      ))}
    </>
  );
};

Badge.propTypes = {
  badges: Proptypes.array,
};

export default Badge;
