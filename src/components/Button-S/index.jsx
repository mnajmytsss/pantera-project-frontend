/* eslint-disable react/prop-types */
import './index.css'

const ButtonS = ({ label, onClick }) => {
  return (
    <button className="custom-button-s" onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonS;