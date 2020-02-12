import React from 'react';

import '../../App.css';

import Input from './Input/Input';
import Button from './Input/Button';



function Form (props) {

  console.log(props.btnList)


    let btn = props.btnList.map(btn => {
        return (
            <div className={btn.divClass.join(' ')}>
                <Button key={btn.id} classList={btn.btnClass} value={btn.value} handler={btn.handler} />
            </div>
        )
    });



  return (


    //Main Row
    <div className="container mt-5 pb-5 card shadow"> 

      <h1 className="text-center mt-5"> Shareon </h1>

       <div className="row">

            <div className="col-md-4"> </div>

            <div className="col-md-4">

                 <h1 className="text-center text-white"> {props.headerName} </h1>

                <Input list={props.inputList} />

                      { btn }

            <div className="col-md-4"> </div>

        </div>

      </div>

    </div>
    //End of Main Row

    
  );


};//End of function

export default Form;
