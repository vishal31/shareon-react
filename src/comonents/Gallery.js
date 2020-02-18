import React from 'react';

// import Navbar from './Navbar/Navbar';
// import Card from './Card/Card';


const Gallery = props => {

  const blackIcon = "https://img.icons8.com/metro/26/000000/like.png";
  const redIcon = "https://img.icons8.com/cute-clipart/26/000000/like.png";


    return (

  

      <div className="card shadow-sm">
      
        <img  src={props.imgPath} className="img-fluid" alt={props.alt} style={{height: '300px'}} />

        <div className="card-header"> 

            <b> Name : </b> {props.user_name}

        </div>


        {/* Card Body */}
        <div className="card-body"> 

          <div className="row">

              <div className="col-12 "> 

                <b> Date : </b> {props.date} 

              </div>

              <div className="col mt-2"> 
              
                <b> Like Count : </b>   {props.likeCounter} 

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

 

  
}//End of method

export default Gallery;
