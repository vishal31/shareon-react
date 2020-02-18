import React, {Component} from 'react';

import '../App.css'

import Form from '../comonents/Form/Form';
import axios from '../utils/axios';



class Login extends Component {

  constructor() {

    super();

    
    const token = localStorage.getItem('token');

    if(token) {
      localStorage.removeItem('token');
      localStorage.removeItem('userID');

    }

  }





  state = {
    email: '',
    password: '',

    errorMsg: ''
  };





   changed = (value, type) => {
     

      if(type === 'email') {
        this.setState({email: value});

      }else if(type === 'password') {

        this.setState({password: value});

      }

  }



  redirectHandler = (value) => {

      const email    = this.state.email;
      const password = this.state.password;

      if(!email) {
        this.setState({errorMsg: 'Email Field is required'})
      }

      if(!password) {
        this.setState({errorMsg: 'Password Field is required'})
      }

      if(!email && !password) {
        this.setState({errorMsg: 'All field is required'})
      }

      if(email && password) {
        this.setState({errorMsg: ''});

        axios.post('login', {

          email    : email,
          password : password
        })
        .then(res => {

          const token = res.data.token;
          const userID = res.data.userID;

          if(token && userID) {

            localStorage.setItem('token', token);
            localStorage.setItem('userID', userID);

            this.props.history.push({
              pathname: '/home'
            })
  
          }

        })
        .catch(err => console.log(err));

      }

  };//End of redirectHandler() method

  
  //Generating Input field
   inputList = [

    {
      id: 2,
      classList :['mt-2 form-control'],
      type: 'email',
      holder: 'Email',
      handler: this.changed
    },

    {
      id: 3,
      classList :['mt-2 form-control'],
      type: 'password',
      holder: 'Password',
      handler: this.changed
    },


];




//Generating Btn List
  btnList = [

      {
          id: 1,
          divClass: [''],
          btnClass: ['mt-4 btn btn-block text-white'],
          value: 'Login',
          handler : this.redirectHandler
      },

  ]








    render () {

      
      return (

        <div className="row">

          <div className="col-md-2"> </div>

          <div className="col"> 

            <Form errorMsg = {this.state.errorMsg } inputList={this.inputList} btnList={this.btnList} />
            
          </div>

          <div className="col-md-2"> </div>


        </div>

      );

    }//End of render method

  
}//End of class

export default Login;
