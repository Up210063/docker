import React from 'react';
import ReactDOM from 'react-dom/client';
import { CMSApp } from './CMSApp';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CMSApp />
  </React.StrictMode>
);
