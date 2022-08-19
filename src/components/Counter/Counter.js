import './Counter.css'
import { useState } from 'react';
                 //,useEffect
const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)
    
    //const [title, setTitle] = useState('Hola, gente linda!')

    //primer caso: se renderiza y se monta un componente
    //useEffect (() => {
    //    console.log('el componente se montó')
    //
    //   return () => console.log('se va a desmontar el componente')
    //}, [])

    //segundo caso: el componente se renderiza, se monta y se actualiza el titulo
    /*useEffect (() => {
      console.log('Cambió el title')

      return () => console.log('Antes de cambiar title')
    },[title])*/

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
        
    return (
        <div>
            {/*<h1>{title}</h1>*/}
            {/*<button onClick={() => setTitle(title === 'Hola' ? 'Chau' : 'Hola')}>Saludar</button>*/}
            <h1>{count}</h1>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={increment}>Incrementar</button>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        
    )
}

export default Counter;
    
    



