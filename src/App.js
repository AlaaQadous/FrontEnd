// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderTracking from './component/customer/OrderTracking';
import SubmitOrderForm from './component/customer/home-customer';
import ProfileSettings from './component/customer/profil';
import Navbar from './component/customer/navb';
import SignUpSide from './component/signup';
import SignInSide from './component/signin';
import  ManagesTable from './component/admin/manageEmployee';
import AddNews from './component/admin/addNews';

const App = () => {

  return (
    <Router>
      <Navbar />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>
          <Route exact path="/" element={<OrderTracking />} />
          <Route path="/logout" element ={<AddNews/>}/>
          <Route path="/orders" element={<SubmitOrderForm />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/signup" element={<SignUpSide/>} />
          <Route path="/signin" element={<SignInSide/>} />
          <Route path="/login" element={<SignInSide/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
