import React from 'react';

import  '../../App.css';

import img from '../../assets/img_avatar1.png';

import Button from '../../comonents/Form/Input/Button';


function UserCard() {


    const redirectHandler = () => {

    }
  

  return (
    
    <div className="row mt-4 border shadow">


        <div className="col-2">
            <img  src={img} className="img-fluid" />
        </div>


        <div className="col-3 mt-4"> Vishal </div>

        <div className="col-3 mt-4"> 
        
            <Button classList = {['btn text-white']} value="Follow" />
        </div>


       
    </div>
    
  );



}



export default UserCard;
