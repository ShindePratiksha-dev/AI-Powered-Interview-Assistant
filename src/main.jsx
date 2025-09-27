import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './App'; // assuming you kept file name as App.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>,
);
