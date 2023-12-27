/* eslint-disable react/prop-types */
import "./PublicationCard.css";
import ButtonM from "../Button-M";

const PublicationCard = ({ imageUrl, title, typography, buttonLabel }) => {
  return (
    <div className="publication-card">
      <img className="image" src={imageUrl} />
      <div className="caption">
        <h3>{title}</h3>
        <p>{typography}</p>
        <ButtonM label={buttonLabel} />
      </div>
    </div>
  );
};

export default PublicationCard;
