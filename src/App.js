// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderTracking from'./component/customer/OrderTracking';
import SubmitOrderForm from './component/customer/home-customer';
import ProfileSettings from './component/customer/profil';
import Navbar from './component/navb';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>
          <Route exact path="/" element={<OrderTracking />} />     
          <Route  path="/logout" element />
          <Route   path="/orders" element={<SubmitOrderForm />} />
          <Route  path="/profile" element={<ProfileSettings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
