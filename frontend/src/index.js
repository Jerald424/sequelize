import App from 'App';
import ThemeContext from 'contextProvider/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "styles/commonStyles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
