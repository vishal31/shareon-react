import React, { Component } from 'react';

import Navbar from '../../comonents/Navbar/Navbar';
import Button from '../../comonents/Form/Input/Button';
//import Input  from '../../comonents/Form/Input/Input';
import axios from '../../utils/axios';

const header = {
    Authorization : `Bearer ${localStorage.getItem('token')}`         
}

class Upload extends Component {



    state = {
        imgName1: '',
        imgName2: '',
        selectedFile : null,
        profilePic: null
    }


    storeFileToState = (target, value) => {

        if(value === 'Upload Feature Pic') {

            const fileObj = target.files[0];

            this.setState({
                imgName1: fileObj.name,
                selectedFile: fileObj
            });
            
        }else if(value === 'Upload Profile Pic') {
            
            const fileObj = target.files[0];

            this.setState({
                imgName2: fileObj.name,
                profilePic: fileObj
            });


        }
      

    }




    uploadPic = (value) => {

        
        if(value === 'Upload Feature Pic') {

            const data = new FormData();
            data.append('featureImg', this.state.selectedFile);

             axios.post('feature-pic', data, {headers: header})
            .then(res => {

                const msg = res.data.message;
                alert(msg)
            })
            .catch(err => console.log(err));



        }else if(value === 'Upload Profile Pic') {

            const data = new FormData();
            data.append('profileImg', this.state.profilePic);

             axios.put('profile-pic', data, {headers: header})
            .then(res => {
                
                alert(res.data.message);
            })
            .catch(err => console.log(err));



        }
        
        

        console.log(value)
        
    }



    render() {

        return (
    
            <div>

                <Navbar to={window.location.pathname} classList={['active']} />

                <div className="container shadow p-5 mt-5">
            
                    <div className="custom-file mb-5">

                        <input type="file" id="featureImg" 
                            onChange={(value) => this.storeFileToState(value.target, 'Upload Feature Pic')} 
                        />  

                        <label className="custom-file-label" htmlFor="featureImg"> 
                        
                            {this.state.imgName1 ? this.state.imgName1 : 'Upload Your Feature Photo'} 
                            
                        </label>

                        <div className="row">
                            <div className="col"> </div>
                                <Button classList={['btn text-white mt-3']} value="Upload Feature Pic" handler={this.uploadPic} />

                            <div className="col"> </div>
                        </div>

                    </div> 




                    <div className="custom-file mt-5">

                        <input type="file" id="profileImg"
                                onChange={(value) => this.storeFileToState(value.target, 'Upload Profile Pic')}
                        />
                        <label className="custom-file-label" htmlFor="profileImg"> 
                        
                            {this.state.imgName2 ? this.state.imgName2 : 'Upload Your Profile Photo'} 

                        </label>

                        <div className="row">
                            <div className="col"> </div>
                                <Button classList={['btn text-white mt-3']} value="Upload Profile Pic" handler={this.uploadPic} />

                            <div className="col"> </div>
                        </div>

                    </div>
                
                </div>

            </div>

        
        
            
          );
        
        

    }//End of render method
  

}//End of class

export default Upload;
