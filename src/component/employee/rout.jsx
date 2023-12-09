// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navb';
import OrderList from './neworder';
import ReadyOrder from './orders';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>
          <Route exact path="/" element={<OrderList/>} />
          <Route path="/logout" element />
          <Route exact path="/order" element={<ReadyOrder/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
