// src/App.js
import { useRef } from "react";
import "./App.css";
import ToastContainer from "./components/ToastContainer";

const App = () => {
  const toastRef = useRef();

  const showToast = (message, type) => {
    toastRef.current.addToast(message, type);
  };

  return (
    <div className="app">
      <button
        onClick={() => showToast("This is a success message!", "success")}
      >
        Success Toast
      </button>
      <button
        onClick={() => showToast("This is a warning message!", "warning")}
      >
        Warning Toast
      </button>
      <button onClick={() => showToast("This is a info message!", "info")}>
        Info Toast
      </button>
      <button onClick={() => showToast("This is a error message!", "error")}>
        Error Toast
      </button>
      <ToastContainer ref={toastRef} />
    </div>
  );
};

export default App;
