// ImageCard.jsx
import pabji from '../../assets/pabji.jpeg';
import "./index.css"

const ImageCard = () => {
  return (
    <div className="image-card">
      <img className="image" src={pabji} alt="Sustainable Landscape Management" />
      <div className="caption">Sustainable Landscape Management</div>
    </div>
  );
};

export default ImageCard;
