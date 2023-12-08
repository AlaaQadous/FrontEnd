// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpSide from './component/signup';
import SignInSide from './component/signin';
const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUpSide/>} />
          <Route path="/signin" element={<SignInSide/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
