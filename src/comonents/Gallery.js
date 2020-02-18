import React from 'react';

// import Navbar from './Navbar/Navbar';
// import Card from './Card/Card';


const Gallery = props => {


    return (

  

      <div className="card shadow-sm">
      
        <img  src={props.imgPath} className="img-fluid" alt={props.alt}/>

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
                <b className="text-primary ml-5" onClick={() => props.likeHandler(props.imgID) }> {props.likeOrUnlike} </b>

              </div>
                
            </div>

        </div>
        {/* End of card body */}


      </div>


    );

 

  
}//End of method

export default Gallery;
