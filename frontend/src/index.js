import App from 'App';
import ThemeContext from 'contextProvider/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "styles/commonStyles.css";
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from 'contextProvider/ToastContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <ToastContext>
        <App />
      </ToastContext>
    </ThemeContext>
  </React.StrictMode>
);
