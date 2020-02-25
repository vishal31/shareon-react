import React, {Component} from 'react';

import Navbar from '../comonents/Navbar/Navbar';
import Gallery from '../comonents/Gallery';
import axios from '../utils/axios';


let header;


class Home extends Component {

    state = {

      homePicList : [],

    }



    componentDidMount() {

console.log('header', header)

      
      axios.get('home', {headers: header})
        .then(res => {

          this.setState({homePicList: res.data.data});
          
          console.log(res.data.data)
        })
        .catch(err => {
          console.log(err);
        })


    }//End of componentDidMount() method


    
    likeHandler = (value) => {

      axios.post('like', {
          featurePicId : value
      }, {headers: header})
      .then(res => {

         
          axios.get('home', {headers: header})
          .then(res => {
              
              const home_img = res.data.data;
              
               //console.log('home', home_img);

              this.setState({
                  homePicList: home_img
              });
              
          })
          .catch(err => err.response);

          
      })
      .catch(err => console.log(err.response.data))
      

  }
















  render () {

    

    header = {
      Authorization : `Bearer ${localStorage.getItem('token')}`         
    }

    const homePicList = this.state.homePicList;

    let GalleryList;
    if(homePicList.length > 0) {

      GalleryList = homePicList.map(homePic => {

        const imgPath = `http://localhost:8080/${homePic.featureImg}`;

        const date = homePic.date.split('T')[0];


        console.log('homePic', homePic.likeOrUnlike)

        return (
        
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 ml-3" key={homePic.feature_picsId}>

              <Gallery 
            
                imgPath={imgPath}
                user_name={homePic.user_name}
                date={date}
                likeCounter= {homePic.likeCounter}
                likeHandler={this.likeHandler}
                imgID={homePic.feature_picsId}
                likeOrUnlike={homePic.likeOrUnlike}

            />


          </div>      
        )

      }) 

    }

    
    return (

      <div>

        <Navbar to={window.location.pathname} classList={['active']} />

        <h1 className="text-center mt-4"> Posted By Your Followers </h1>

        <div className="row mr-1 mb-5 mt-5">

          {GalleryList}

        </div>
        
      </div>

    );

  }//End of render method

  
}//End of class

export default Home;
