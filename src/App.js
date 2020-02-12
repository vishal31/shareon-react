/***
 * Project Started on 10-02-2020
 * 
 * 
 */




import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';



import Login from './container/Login';

import Signup from './container/Signup';

import Modal from './comonents/Modal/Modal';

import Navbar from './comonents/Navbar/Navbar';

import Card from './comonents/Card/Card';

import Profile from './container/Profile/Profile';

import Search from './container/Search/Search';

import Home from './container/Home';

import Upload from './container/Upload/Upload';






function App(props) {

  
  return (
    
      <BrowserRouter>


        <Switch>

         
            
          <Route path="/search" component={Search} />
          <Route path="/account" component={Profile} />
          <Route path="/upload" component={Upload} />


          <Route path="/" component={Home} />
         



        </Switch>
      </BrowserRouter>
  );



}

export default App;
