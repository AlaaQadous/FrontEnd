import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignInSide from './component/signin' ;
import SignUpSide from './component/signup';
import reportWebVitals from './reportWebVitals';
import ManagesTable from './component/admin/manageEmployee';
import ReadyOrder from './component/admin/readyOrder';
import MuiCardExample from './component/admin/addNews';
import Order from './component/admin/order';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Order/>
  </React.StrictMode>
);


reportWebVitals();
