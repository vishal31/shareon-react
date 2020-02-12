import React, {Component} from 'react';

import Navbar from '../comonents/Navbar/Navbar';
import Card from '../comonents/Card/Card';


class Home extends Component {


  render () {

    
    return (

      <div>

        <Navbar to={window.location.pathname} classList={['active']} />

        <h1 className="text-center mt-4"> Posted By Your Followers </h1>
        <Card />

      </div>

    );

  }//End of render method

  
}//End of class

export default Home;
