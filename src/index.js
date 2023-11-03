import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignInSide from './signin' ;
import SignUpSide from './signup';
import reportWebVitals from './reportWebVitals';
import OrderTracking from'./customer/OrderTracking';
import SubmitOrderForm from './customer/home-customer';
import ProfileSettings from './customer/profil';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SignInSide/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
