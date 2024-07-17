// src/components/ToastContainer.js
import { forwardRef, useImperativeHandle, useState } from "react";
import Toast from "./Toast";
import "./ToastContainer.css"; // Add styles for the toast container

const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { message, type, id }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  };

  useImperativeHandle(ref, () => ({
    addToast,
  }));

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToasts((prevToasts) =>
              prevToasts.filter((t) => t.id !== toast.id)
            )
          }
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = "Container";

export default ToastContainer;
