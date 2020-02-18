import React from 'react';

import img from '../../assets/img_avatar1.png';

function Card(props) {

  return (

    <div className="card shadow-sm">
      
      <img  src={props.imgPath} className="img-fluid" alt={props.alt}/>

      <div className="card-header"> 
          Date : {props.date}
      </div>


      {/* Card Body */}
      <div className="card-body"> 

        <div className="row">

            <div className="col"> 
              
              Like Count :  {props.likes}  

            </div>

            <div className="col"> 
              <p className="text-primary" onClick={() => props.likeHandler(props.imgID) }> {props.likeOrUnlike} </p>
            </div>
              
          </div>

      </div>
      {/* End of card body */}


  </div>
    



  );



}

export default Card;
