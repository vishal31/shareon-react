/***
 * Project Started on 10-02-2020
 * 
 * 
 */




import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Modal from './comonents/Modal/Modal';
// import Navbar from './comonents/Navbar/Navbar';
//import Card from './comonents/Card/Card';


import Login from './container/Login';

import Signup from './container/Signup';


import Profile from './container/Profile/Profile';

import Search from './container/Search/Search';

import Home from './container/Home';

import Upload from './container/Upload/Upload';

import ForgotPassword from './container/Forgot-Password';

import OTP from './container/OTP';




function App(props) {


  const token = localStorage.getItem('token');

  console.log('token', token)


  
  return (
    
      <BrowserRouter>


        <Switch>

         
            
          <Route path="/search" component={Search} />
          <Route path="/account" component={Profile} />
          <Route path="/upload" component={Upload} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <Route path="/otp" component={OTP} />

          <Route path="/home" component={Home} />




          <Route path="/" component={Signup} />
         



        </Switch>
      </BrowserRouter>
  );



}

export default App;
