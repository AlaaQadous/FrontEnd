// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarr from './navb';
import AddNews from './addNews';
import ManagesTable from './manageEmployee';
import Order from './order';
import ReadyOrder from './readyOrder';

const App = () => {

  return (
    <Router>
      <Navbarr />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Routes>
          <Route exact path="/" element={< AddNews />} />
          <Route path="/logout" element />
          <Route path="/orders" element={<Order />} />
          <Route path="/ready" element={<ReadyOrder />} />
          <Route path="/manage" element={<ManagesTable />}/>
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
