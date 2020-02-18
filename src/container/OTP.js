import React, {Component} from 'react';

import '../App.css'

import Form from '../comonents/Form/Form';
import axios from '../utils/axios';

class Signup extends Component {


  state = {
    OTP: '',
    errorMsg: '',
  }


  changed = (value, type) => {

    if(type === 'number') {
      this.setState({OTP: value});
    }


  }//End of changed() method


  redirectHandler = (value) => {

    const OTP    = this.state.OTP;

    const data = JSON.parse( localStorage.getItem('signupData') );


    if(OTP.length != 6) {
      this.setState({errorMsg: 'OTP should be a 6 digits'});

    }else{

      axios.post('/signup', {

        OTP : OTP,
        user_name : data.name,
        email : data.email,
        password : data.password
      })
      .then(res => {

        if(res.data.userID) {

          localStorage.removeItem('signupData');
          
          this.props.history.push({
            pathname: '/login'
          })
        }


      })
      .catch(err => console.log(err));


      console.log(JSON.parse(data))


    }
    

  };//End of redirectHandler() method
  

  
  //Generating Input field
   inputList = [

    {
        id: 1,
        classList :['mt-2 form-control'],
        type: 'number',
        holder: 'Enter OTP',
        handler: this.changed
    }

];




//Generating Btn List
  btnList = [

      {
          id: 1,
          divClass: [''],
          btnClass: ['mt-4 btn btn-block text-white'],
          value: 'Submit',
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
