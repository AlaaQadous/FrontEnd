import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSide from './signin';
import SignUpSide from './signup';
import Navbar from './Nav/mainNav';
import Home from './home/home';
import Admin from './admin/rout';
import Customer from './customer/rout';
import Employee from './employee/rout';
import { Protect } from './Protect';
import { loginSuccess } from '../features/authSlice';
import { useDispatch  } from "react-redux";
import OrderTracking from './customer/OrderTracking';
import SubmitOrderForm from './customer/home-customer';
import ProfileSettings from './customer/profil';
import AddNews from './admin/addNews';
import Order from './admin/order';
import ReadyOrder from './admin/readyOrder';
import ManagesTable from './admin/manageEmployee';
import OrderList from './employee/neworder';
import ReadyOrderr from './employee/orders';
const App = () => { 
  const dispatch = useDispatch();

  useEffect(()=>
  {
if(localStorage.getItem("token")){
dispatch(
  loginSuccess({
token:localStorage.getItem("token"),
role:localStorage.getItem("role")
  })
)
}
  },[])
  return (
    <Router>
   <Navbar/>
      <div>
        <Routes>
          <Route path="/login" element={<SignInSide/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUpSide/>} />

          //start 
          <Route element={<Protect  role={"user"} />}>
          <Route path="/customer" element={<> <Customer/>< OrderTracking /> </>} />
          <Route path="/orders" element={<><Customer/> <SubmitOrderForm /></>} />
          <Route path="/profile" element={<> <Customer/><ProfileSettings /></>} />
          </Route>
          //end 


          ///start
          <Route element={<Protect  role={"admin"} />}>
          <Route path="/admin" element={ <> <Admin/> <AddNews /></>} />
          <Route path="/ready" element={<> <Admin/> <ReadyOrder /></>} />
          <Route path="/ord" element={<> <Admin/> <Order/></>} />
          <Route path="/manage" element={<><Admin/> <ManagesTable /></>}/>
          <Route path="/myfro" element={<><Admin/> <ProfileSettings /></>} />

          </Route>
          ///end

          //start
          <Route element={<Protect  role={"employee"} />}>
          <Route  path="/employee" element={<><Employee/><OrderList/></>} />
          <Route  path="/order" element={<><Employee/><ReadyOrderr/></>} /> 
          <Route  path="/account" element={<><Employee/><ProfileSettings /></>} /> 
          </Route>
          //end
        </Routes>
      </div>
    </Router>
  );
};

export default App;
