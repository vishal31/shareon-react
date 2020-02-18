import React from 'react';

import {Link} from 'react-router-dom'

import '../../App.css';

import Input from './Input/Input';
import Button from './Input/Button';
import SubCard from '../Card/Sub-Card'



function Form (props) {

  console.log(props.btnList)


    let btn = props.btnList.map(btn => {
        return (
            <div className={btn.divClass.join(' ')}  key={btn.id}>
                <Button classList={btn.btnClass} value={btn.value} handler={btn.handler} />
            </div>
        )
    });

    const PATH = window.location.pathname;

    // const STYLE = {

    //   width: '10px',
    //   height: '1px',
    //   display: 'inline-block',
    //   border : '1px solid black'
    // }

  return (


    
    <div className="container w-75 mt-5 pb-5 card shadow"> 

      <h1 className="text-center mt-4 text-success"> Shareon </h1>

       {/* Main Row */}
       <div className="row justify-content-center">

            <div className="col col-md-10 col-lg-8">

              {/* Error Message */}
              <p className={props.errorMsg ? "text-center mt-3 mb-3 text-danger text-weight-bolder" : "d-none"}>             
                {props.errorMsg}
              </p>
  
              <Input list={props.inputList} />

              { btn }

              {PATH != '/login' ? <SubCard description="Have an account?" path="/login" value="Log in"/>
              
              : <SubCard description="Don't have an account?" path="/signup" value="Sign up"/>}
                

          

              <div className={PATH != '/login' ? "d-none" : "d-block"}>

                <p className="text-center"> or </p>
              
                <p className="text-center"> Forgot password? <Link to="/otp">Login via OTP </Link> </p>
     
              </div>


        </div>

      </div>

    </div>
    //End of Main Row

    
  );


};//End of function

export default Form;
