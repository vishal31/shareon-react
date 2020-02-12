import React from 'react';

import {Link} from 'react-router-dom';

function NavbarItem(props) {


    let NavList;

    NavList = props.NavList.map(item => {

        return (
            <li key={item.id} className={item.classList.join(' ')}>
                <Link className="nav-link" href="#" to={item.path}> {item.itemName} </Link>
            </li>
        );


    });

  return (
            <ul className="navbar-nav">

                {NavList}
                
            </ul>

  );



}

export default NavbarItem;
