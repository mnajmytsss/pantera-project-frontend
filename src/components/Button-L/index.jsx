/* eslint-disable react/prop-types */
import './index.css'

const ButtonL = ({ label, onClick }) => {
  return (
    <button className="custom-button-l" onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonL;