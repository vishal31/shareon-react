import React from 'react';

const ProfileHeader = props => {

    return (


        <div className="row">

            <div className="col-12">
                {props.headerName}
            </div>

            <div className="col-12 ml-2">
                {props.headerValue}
            </div>

        </div>
        
           
  );



}

export default ProfileHeader;
