import React, {Component} from 'react';

import '../App.css'

import Form from '../comonents/Form/Form';
import axios from '../utils/axios';


class Signup extends Component {


  state = {
    name: '',
    email: '',
    password: '',
    errorMsg: '',
  }


  changed = (value, type) => {

    if(type === 'text') {
      this.setState({name: value});

    }else if(type === 'email') {
      this.setState({email: value});

    }else if(type === 'password') {
      this.setState({password: value});

    }


  }//End of changed() method


  redirectHandler = (value) => {

    const name    = this.state.name;
    const email    = this.state.email;
    const password = this.state.password;

    if(!name) {
      this.setState({errorMsg: 'Name Field is required'})
    }

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

      const data = {
        name     : name,
        email    : email,
        password : password,

      }

      localStorage.setItem('signupData', JSON.stringify(data) );

      axios.post('isUserExist', {email: email})
        .then(user => {
          
          if(user.data.status) {

              axios.post('sendOTP', {
                email: email
              })
              .then(res => {
                  
                  console.log(res)
                this.props.history.push({
                  pathname: '/otp'
                })

              })
              .catch(err => console.log(err.response.data))
        
          }

        })
        .catch(err => console.log(err.response.data))
      
     

    }

   


  };//End of redirectHandler() method
  

  
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
      }
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


    )   

  }//End of render method

  
}//End of class

export default Signup;
