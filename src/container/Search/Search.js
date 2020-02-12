import React, {Component} from 'react';

import Navbar from '../../comonents/Navbar/Navbar'
import Input from '../../comonents/Form/Input/Input';
import UserCard from './UserCard';


class Search extends Component {


   changed = () => {

  }


  
  //Generating Input field
   inputList = [

    {
      id: 1,
      classList :['mt-2 form-control'],
      type: 'text',
      holder: 'search...',
      handler: this.changed
    },

];



  render () {

    
    return (

      <div>

        <Navbar to={window.location.pathname} classList={['active']} />
        
        <div className="card p-3 shadow">

          <Input list={this.inputList}/>  
        </div> 

        <UserCard />


      </div>

    );

  }//End of render method

  
}//End of class

export default Search;
