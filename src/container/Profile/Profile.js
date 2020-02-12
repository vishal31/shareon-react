import React, { Component } from 'react';

import img from '../../assets/img_avatar1.png';

import Navbar from '../../comonents/Navbar/Navbar'
import ProfileHeader from './Profile-Header'
import Card from '../../comonents/Card/Card'

class Profile extends Component {


    redirect = () => {
        this.props.history.push({ pathname: '/upload' })
    }

    render() {

        return (
    
            <div>

                <Navbar to={window.location.pathname} classList={['active']} />

                <div className="row">

                    <div className="col-2 ml-2 mt-2">

                    
                        <img src={img} className="img-fluid rounded-circle" />

                        <p className="ml-4 mt-2"> Name : vishal </p>
                    </div>
                
                    <div className="col-2 mt-sm-3 mt-md-5">
                        <ProfileHeader headerName="Post" headerValue="5 " />           
                    </div>
            
                    <div className="col-2 mt-sm-3 mt-md-5">
                        <ProfileHeader headerName="Follower" headerValue="5 " />           
                    </div>
            
                    <div className="col-2 mt-sm-3 ml-2 mt-md-5">
                        <ProfileHeader headerName="Following" headerValue="5 " />           
                    </div>

                    <div className="btn col-12 text-white mt-4 mb-5" onClick={this.redirect}> Edit Profile Pic </div>

                    <div className="ml-5" style={{display: "flex", flexWrap: 'wrap'}}>

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                
                </div>

            </div>

        
        
            
          );
        
        

    }//End of render method
  

}//End of class

export default Profile;
