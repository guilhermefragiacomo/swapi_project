import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
