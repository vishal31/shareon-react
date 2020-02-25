import React, {Component} from 'react';

import Navbar from '../../comonents/Navbar/Navbar'
import Input from '../../comonents/Form/Input/Input';
import UserCard from './UserCard';
import axios from '../../utils/axios';





let header;

class Search extends Component {


  state = {

    followerID: 0,
    btnValue : '',
    users: [],
    name: ''
  }

   changed = (value) => {

    this.setState({name : value});

    axios.get(`search?user_name=${value}`, {headers: header})
      .then(res => {

         console.log('user', res.data.data)

        this.setState({
          users: res.data.data,
        })

      })
      .catch(err => console.log(err))
    
  }


  handler = (value, userID) => {


      if(value === 'following') {

        axios.delete('follow', {
          
          data: {  followerID: userID }
        
        }, {headers: header})
        .then(res => {

          axios.get(`search?user_name=${this.state.name}`, {headers: header})
          .then(res => {

            this.setState({
              users: res.data.data,
            })

          })
          .catch(err => console.log(err))
        

        })//End of main .then block

        

      }else{

        //For inserting follower
        axios.post('follow', {
          followerID: userID
        }, {headers: header})
        .then(res => {

          axios.get(`search?user_name=${this.state.name}`, {headers: header})
          .then(res => {

            this.setState({
              users: res.data.data,
            })

          })
          .catch(err => console.log(err))
        

        })//End of main .then block



    }
    
  };//End of handle function

  
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

        
    header = {
      Authorization : `Bearer ${localStorage.getItem('token')}`         
    }

    const users = this.state.users;
    let userList;

    if(users) {

      userList = users.map(user => {

        const imgPath = `http://localhost/${user.profile_picture}`;

        console.log('user.btnValue = ', user)

        return (

      

          <UserCard
            key={user.user_main_ID}
            imgPath={user.profile_picture? imgPath: null}
            name={user.user_name}
            handler={this.handler}
            userID={user.user_main_ID}
            value={user.btnValue}
            role={user.role}
          />
        );

      })

    }

    
    return (

      <div>

        <Navbar to={window.location.pathname} classList={['active']} />

        <div className="containers w-75 ml-5">

          <div className="card p-3 mt-3 shadow">

            <Input list={this.inputList}/> 
             
          </div> 

         {userList ? userList : 'User not found..'}

        </div>


      </div>

    );

  }//End of render method

  
}//End of class

export default Search;
