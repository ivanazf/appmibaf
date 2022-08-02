import React, {useEffect} from 'react';

const Button = ({children}) => {
        //const {handleClick, children} = props
    const handleClick = () => {
        console.log('hola')
    }
    
    useEffect(() => {
        const button = document.getElementById('button')
        
        button.addEventListener('click', handleClick)
        
        return () => {
            button.removeEventListener('click', handleClick)
        };
    }, []);
    
    return (
    <button id='button' onClick={handleClick}> 
        {children}
    </button>
    )
}

export default Button;