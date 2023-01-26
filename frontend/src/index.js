import App from 'App';
import ThemeContext from 'contextProvider/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "styles/commonStyles.css";
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from 'contextProvider/ToastContext';
import SweetAlertContext from "contextProvider/SweetAlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <ToastContext>
        <SweetAlertContext>
          <App />
        </SweetAlertContext>
      </ToastContext>
    </ThemeContext>
  </React.StrictMode>
);
