import React, { Component } from 'react';

import img from '../../assets/img_avatar1.png';

import Navbar from '../../comonents/Navbar/Navbar'
import ProfileHeader from './Profile-Header'
import Card from '../../comonents/Card/Card'
import axios from '../../utils/axios';

class Profile extends Component {


    state = {

        feature_img: [],
        profile_header: {},
        likeList: []
    }


    componentDidMount() {

        axios.get('feature-pic')
            .then(res => {
                
                const feature_img = res.data.data;
                
                console.log('starting', feature_img);

                this.setState({
                    feature_img: feature_img
                });
                
            })
            .catch(err => err.response);


    /*************************************** */

        axios.get('profile')
            .then(res => {
                
                const profile_header = res.data.data;
                
                console.log('profile_header', profile_header);

                this.setState({
                    profile_header: profile_header
                });
                
            })
            .catch(err => err.response.data);


    }//End of componentDidMount() method




    

    redirect = () => {
        this.props.history.push({ pathname: '/upload' })
    }


    likeHandler = (value) => {

        axios.post('like', {
            featurePicId : value
        })
        .then(res => {

            this.setState({ likeList : res.data.data });
           
           
            axios.get('feature-pic')
            .then(res => {
                
                const feature_img = res.data.data;
                
                // console.log('starting', feature_img);

                this.setState({
                    feature_img: feature_img
                });
                
            })
            .catch(err => err.response);

            
        })
        .catch(err => console.log(err.response.data))
        

    }






    render() {

        let feature_img_list;

        if(this.state.feature_img) {

            // console.log(this.state.feature_img)
            feature_img_list = this.state.feature_img.map(feature_img => {
                
                const date = feature_img.createdAt.split('T')[0];

                const likeObj = feature_img.likes[0];

                let fetureID;
                if(likeObj) {
                    fetureID = likeObj.featurePicId;
                }else{
                    fetureID = null;
                }


                return (

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={feature_img.id}>

                        
                        <Card 
                            imgPath={`http://localhost:8080/${feature_img.featureImg}`} 
                            
                            date={date}
                            likes= {feature_img.likes.length} 
                            alt=""
                            likeHandler={this.likeHandler}
                            imgID={feature_img.id}
                            likeOrUnlike= { fetureID ? 'Unlike' : 'Like'}
                        />
                            
                    </div>
                );

            })

        }





    /********************************   Loading profile    ******************************** */
    
    const profile_header = this.state.profile_header;

    let profile_header_list = [];

        if(this.state.profile_header) {


            for(let profile in profile_header) {
                // console.log('profile', profile)

                const tmpEle = (
                    <div className="col" key={profile}>
                        <ProfileHeader headerName={profile} headerValue={profile_header[profile]} />           
                    </div>
                )

                if(profile != 'profile_Pic') {
                    profile_header_list.push(tmpEle);
                }


            }
            
        }



        return (
    
            <div>

                <Navbar to={window.location.pathname} classList={['active']} />

                {/*Header Main row */}
                <div className="row mr-1 mb-5 shadow-sm pt-3 pb-3">

                    <div className="col">
                        <img 
                            src={profile_header.profile_Pic ? `http://localhost:8080/${profile_header.profile_Pic}` : img} 
                            className="img-fluid rounded-circle ml-2" 
                            style={{width: '60px', height:'60px'}} 
                        />
                    </div>

                   
                    {profile_header_list}

                </div>
                {/* End of Header Main row */}




                {/*Pic Main row */}
                <div className="row mr-1 ml-1">


                    {/* Images column */}
                    <div className="col">

                        <div className="row">

                            <h1 className={this.state.feature_img.length == 0 ? "ml-auto mr-auto mt-5" : "d-none"}> 
                                You haven't post yet 
                            </h1>
                            
                            {feature_img_list ? feature_img_list : 'Loading...'}

                        </div>
                        {/* End of Inner Row */}


                    </div>
                    {/* End Images column */}



                </div>
                {/* End of main row */}

            </div>   
            
          );
        
        

    }//End of render method
  

}//End of class

export default Profile;
