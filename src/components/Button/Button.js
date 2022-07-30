import React from 'react';

const Button = ({handleClick, children}) => {
    
    //const {handleClick, children} = props

    return (
    <button onClick={handleClick}>
        {children}
    </button>
    )
    //Esto va en la prop onClick={props.handleClick}
   // document.getElementById('button')
}

export default Button;