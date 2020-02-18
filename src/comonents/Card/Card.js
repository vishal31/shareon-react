import React from 'react';

import img from '../../assets/img_avatar1.png';

function Card(props) {

  const blackIcon = "https://img.icons8.com/metro/26/000000/like.png";
  const redIcon = "https://img.icons8.com/cute-clipart/26/000000/like.png";


  return (

    <div className="card shadow-sm">
      
      <img  src={props.imgPath} className="img-fluid" alt={props.alt} style={{height: '300px'}} />

      <div className="card-header"> 
          Date : {props.date}
      </div>


      {/* Card Body */}
      <div className="card-body"> 

        <div className="row">

            <div className="col"> 
              
            <b> Like Count : </b>  {props.likes}  

            </div>

            <div className="col"> 

              <p className="text-primary" onClick={() => props.likeHandler(props.imgID) }> 

                <img src={props.likeOrUnlike === 'Like' ? blackIcon : redIcon}  />            
                 
              </p>
             
            </div>
              
          </div>

      </div>
      {/* End of card body */}


  </div>
    



  );



}

export default Card;
