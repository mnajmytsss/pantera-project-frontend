/* eslint-disable react/prop-types */
import './index.css'

const ButtonM = ({ label, onClick }) => {
  return (
    <button className="custom-button-m" onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonM;