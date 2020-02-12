import React, { Component } from 'react';

import Navbar from '../../comonents/Navbar/Navbar';
import Button from '../../comonents/Form/Input/Button';
import Input  from '../../comonents/Form/Input/Input';

class Upload extends Component {



    state = {

    }






    uploadPic = (value) => {

        //Image is Going to Upload
        console.log(value)
        
    }



    render() {

        return (
    
            <div>

                <Navbar to={window.location.pathname} classList={['active']} />

                <div className="container shadow p-5 mt-5">
            
                    <div className="custom-file mb-5">

                        <Input list={[

                            {
                                id: 1,
                                classList:['custom-file-input'],
                                type: 'file',
                                htmlId: 'featureImg'
                            }

                        ]}  />  
                        <label className="custom-file-label" htmlFor="featureImg"> Upload Your Feature Photo </label>

                        <div className="row">
                            <div className="col"> </div>
                                <Button classList={['btn text-white mt-3']} value="Upload Feature Pic" handler={this.uploadPic} />

                            <div className="col"> </div>
                        </div>

                    </div> 




                    <div className="custom-file mt-5">

                        <Input list={[

                            {
                                id: 1,
                                classList:['custom-file-input'],
                                type: 'file',
                                htmlId: 'profileImg'
                            }


                        ]}  />
                        <label className="custom-file-label" htmlFor="profileImg"> Upload Your Profile Photo </label>

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
