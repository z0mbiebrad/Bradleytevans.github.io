import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as ReactDOMClient from 'react-dom/client';




const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <App />
);

reportWebVitals();
