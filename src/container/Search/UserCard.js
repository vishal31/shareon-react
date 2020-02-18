import React from 'react';

import {Link} from 'react-router-dom';


import  '../../App.css';

import img from '../../assets/img_avatar1.png';

import Button from '../../comonents/Form/Input/Button';


function UserCard(props) {

  

  return (
    
      
      <div className="row mt-4 ml-2 border shadow" style={{height: '100px'}}>

          <div className="col-2"  style={{height: '100px'}}>
              <img  src={props.imgPath ? props.imgPath : img} className="img-fluid"  style={{height: '99px', position: 'relative', left: '-16px'}} alt={props.alt}/>
          </div>

          <div className="col-3 mt-4"> {props.name} </div>

          <div className="col-3 mt-4"> 
          
            {props.role == 'user' ?
                <Button classList = {['btn text-white']} value={props.value ? props.value: 'Follow'} handler={props.handler} userID={props.userID}/>
        
                : <Link to="/account">
                    <Button classList = {['btn text-white']} value="Account" handler={() => {}}/>
                  </Link>
        }
              
          </div>

        
      </div>
      
  );



}



export default UserCard;
