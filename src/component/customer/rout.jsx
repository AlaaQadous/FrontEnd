// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderTracking from './OrderTracking';
import SubmitOrderForm from './home-customer';
import ProfileSettings from './profil';
import Navbar from './navb';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>
          <Route exact path="/" element={<OrderTracking />} />
          <Route path="/logout" element />
          <Route path="/orders" element={<SubmitOrderForm />} />
          <Route path="/profile" element={<ProfileSettings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
