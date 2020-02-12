import React from 'react';



const Input = props => {

    //console.log(props.list)

    let Input = props.list.map((ele) => {
        return (<input
                    key={ele.id} 
                    className={ele.classList.join(' ')} 
                    type={ele.type} 
                    placeholder={ele.holder} 
                    onChange={(event) => ele.handler(event.target.value, ele.type) } 
                    id={ele.htmlId}
                />
            )

    });

    return Input;
} 



export default Input;