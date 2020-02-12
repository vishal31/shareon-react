import React, {useState} from 'react';

import Button from '../Form/Input/Button';

import NavItem from './Navigation-item';

function Navbar(props) {


    const [currState, updateStateFun] = useState({
        show: false,
    });




    const redirectHandler = (value) => {

        console.log('value', value)
    }



    const NavList = [

        {
            id: 1,
            classList: props.to ==='/' ? props.classList : [''],
            itemName: 'Home',
            path: '/'
        },

        {
            id: 2,
            classList: props.to ==='/upload' ? props.classList : [''],
            itemName: 'Upload',
            path: '/upload'
    }
        ,

        {
            id: 3,
            classList: props.to ==='/search' ? props.classList : [''],
            itemName: 'Search',
            path: '/search'
    }
        ,

        {
            id: 4,
            classList: props.to ==='/account' ? props.classList : [''],
            itemName: 'Account',
            path: '/account'
        }

    ];


    const show = ()=> {

        console.log(currState.show)

        
        updateStateFun({
            show: !currState.show
        })

    }

  return (
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

        <a className="navbar-brand" href="#"> Shareon </a>

        <button className="navbar-toggler" type="button" onClick={show}>
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className={currState.show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>

            <NavItem NavList={NavList} />
            
        </div>  

    </nav>

  );



}

export default Navbar;
