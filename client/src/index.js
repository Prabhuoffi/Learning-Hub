import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use createRoot from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
