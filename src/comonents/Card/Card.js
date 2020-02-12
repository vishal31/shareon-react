import React from 'react';

import img from '../../assets/img_avatar1.png';

function Card() {

  return (
    
    <div className="ml-4">
         
      <div className="card mb-3 shadow-sm mr-3" style={{width: '300px'}}>

        <img  src={img} alt="Card image" className="img-fluid" />

        <div className="card-header"> 
          Name 
        </div>

        <div className="card-body"> 
                
          Date: 20-01-2020
       </div>

      </div>

    </div>
        
  );



}

export default Card;
