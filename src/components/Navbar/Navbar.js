import './Navbar.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    //PARTE LOGICA 
    
    //const text = 'hice clic'

    const handleClick = () => {
       // console.log('text')}
    }
    return ( //PARTE VISUAL
      
       <nav className="Navbar">
           <div>
               <h1>MIBAF para todos</h1>
           </div>
           <div>
               <Button handleClick={handleClick}>Ropa Interior Femenina</Button>
               <Button handleClick={handleClick}>Ropa Interior Masculina</Button>
               <Button handleClick={handleClick}>Ropa Interior para la niñez</Button>
           </div>
           <CartWidget />
       </nav>
        )
    }

export default Navbar;