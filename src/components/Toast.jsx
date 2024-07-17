import PropTypes from "prop-types";
import "./Toast.css"; // You can style the toast using CSS

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close-button" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
