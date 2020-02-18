import React, {Component} from 'react';

import '../App.css'

import Form from '../comonents/Form/Form';
import SubCard from '../comonents/Card/Sub-Card';



class ForgotPassword extends Component {


  state = {
    email: '',
    errorMsg: ''
  };


   changed = (value, type) => {
     
      if(type === 'email') {
        this.setState({email: value});
      }

  }//End of changed() method



  redirectHandler = (value) => {

      const email    = this.state.email;

      if(!email) {
        this.setState({errorMsg: 'Email Field is required'})
      }

  };//End of redirectHandler() method

  
  //Generating Input field
   inputList = [

    {
      id: 1,
      classList :['mt-2 form-control'],
      type: 'email',
      holder: 'Email',
      handler: this.changed
    }

];




//Generating Btn List
  btnList = [

      {
          id: 1,
          divClass: [''],
          btnClass: ['mt-4 btn btn-block text-white'],
          value: 'Forgot Password',
          handler : this.redirectHandler
      },

  ];




    render () {

      
      return (

        <div className="row">

          <div className="col-md-2"> </div>

          <div className="col"> 

            <Form errorMsg = {this.state.errorMsg } inputList={this.inputList} btnList={this.btnList} />

            <SubCard description="Don't have an account?" path="/signup" value="Sign up"/>

          </div>

          <div className="col-md-2"> </div>


        </div>

      );

    }//End of render method

  
}//End of class

export default ForgotPassword;
