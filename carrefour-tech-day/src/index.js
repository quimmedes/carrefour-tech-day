import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Renderizador principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className="Auto"  />
</React.StrictMode>

);



reportWebVitals();
