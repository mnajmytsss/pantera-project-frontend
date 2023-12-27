/* eslint-disable react/prop-types */
import "./MissionCard.css";

const MissionCard = ({ image, caption }) => {
  return (
    <div className="image-card">
      <img className="image" src={image} alt={caption} />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default MissionCard;
