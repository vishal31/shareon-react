import React, {Component} from 'react';

import '../App.css'

import Form from '../comonents/Form/Form';


class Login extends Component {


   changed = () => {

  }


   redirectHandler = () => {

  }

  
  //Generating Input field
   inputList = [

    {
        id: 1,
        classList :['mt-2 form-control'],
        type: 'text',
        holder: 'Name',
        handler: this.changed
    },


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
          value: 'Signup',
          handler : this.redirectHandler
      },

      {
        id: 2,
        divClass: [''],
        btnClass: ['mt-4 btn btn-block text-white'],
        value: 'Login',
        handler : this.redirectHandler

    }
  ]








  render () {

    return <Form headerName = "Signup" inputList={this.inputList} btnList={this.btnList} />    

  }//End of render method

  
}//End of class

export default Login;
