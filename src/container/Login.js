import React, {Component} from 'react';

import '../App.css'

import Form from '../comonents/Form/Form';
import SubCard from '../comonents/Card/Sub-Card';



class Login extends Component {


  state = {
    email: '',
    password: '',

    errorMessage: ''
  };





   changed = (value, type) => {
     

      if(type === 'email') {
        this.setState({email: value});

      }else if(type === 'password') {

        this.setState({password: value});

      }

  }



  redirectHandler = (value) => {

    if(value === 'Login') {

      const email    = this.state.email;
      const password = this.state.password;

      if(!email) {
        this.setState({errorMessage: 'Email Field is required'})
      }

      if(!password) {
        this.setState({errorMessage: 'Password Field is required'})
      }

      if(!email && !password) {
        this.setState({errorMessage: 'Email and Password Field is required'})
      }

      if(email && password) {
        this.setState({errorMessage: ''});

        console.log(email, password);

      }

    }else if(value === 'Signup') {

      console.log('Redirecting')

    }

  }

  
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

            <Form headerName = "Login" inputList={this.inputList} btnList={this.btnList}  errors={this.state.errorMessage} />

            <SubCard description="Don't have an account?" path="/signup" value="Sign up"/>

          </div>

          <div className="col-md-2"> </div>


        </div>

      );

    }//End of render method

  
}//End of class

export default Login;
