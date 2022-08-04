import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';




const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <App />
);

reportWebVitals();
