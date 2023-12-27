// ImageCard.jsx
import pabji from '../../assets/pabji.jpeg';
import "./index.css"

const ImageCard = () => {
  return (
    <div className="image-card">
      <div className="image" style={{ backgroundImage: `url(${pabji})` }} />
      <div className="caption">Sustainable Landscape Management</div>
    </div>
  );
};

export default ImageCard;
