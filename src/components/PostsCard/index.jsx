/* eslint-disable react/prop-types */
import "./PostsCard.css";
import CustomTag from "../Tag";

const PostsCard = ({ image, postCaption, customTagLabel, buttonLink }) => {
  const handleButtonClick = () => {
    // Fungsi ini akan membuka link ketika button diklik
    window.open(buttonLink, '_blank'); // Buka link di tab baru
    // Atau Anda dapat menggunakan window.location.href = buttonLink; 
    // jika ingin membuka link di tab yang sama
  };

  return (
    <div className="imagePost-card">
      <img className="imagePost" src={image} alt="post" />
      <div className="customTag">
        <CustomTag label={customTagLabel} />
      </div>
      <div className="captionPost">
        {postCaption}
      </div>
      <a href="#" className="svg-container" onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="black" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"/>
        </svg>
      </a>
    </div>
  );
};

export default PostsCard;
