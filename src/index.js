import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './component/admin/rout';
//import App from './component/customer/rout';
//import App from './component/rout';
//import App from './component/employee/rout';

import OrderList from './component/employee/neworder';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();
