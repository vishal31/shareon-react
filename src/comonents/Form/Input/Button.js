import React from 'react';

import propTypes from 'prop-types';



const Button = props => {

    return <button 
                style={props.inlineStype} 
                className={props.classList.join(' ')} 
                onClick={() => props.handler(props.value, props.userID)}> 
                    {props.value} 
            </button>
} 


Button.propTypes = {
    classList: propTypes.array.isRequired,
    value: propTypes.string.isRequired
}



export default Button;