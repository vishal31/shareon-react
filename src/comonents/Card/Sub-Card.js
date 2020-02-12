import React from 'react';

import {Link} from 'react-router-dom';

function SubCard(props) {

  return (
    
    <div className="container card shadow mt-5 text-center">

        <p className="pt-2 mt-1"> 
            {props.description} <Link to={props.path}> {props.value} </Link> 
        </p>

    </div>
    
  );



}

export default SubCard;
