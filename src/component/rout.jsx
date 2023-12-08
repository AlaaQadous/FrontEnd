import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSide from './signin';
import SignUpSide from './signup';
import Navbar from './Nav/mainNav';
import Home from './home/home';
const App = () => {

  return (
    <Router>
   <Navbar/>
      <div>
        <Routes>
          <Route path="/login" element={<SignInSide/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUpSide/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
