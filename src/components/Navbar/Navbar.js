import './Navbar.css';
//import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    //PARTE LOGICA 
    
    return ( //PARTE VISUAL
        <nav className="Navbar">
           <Link to='/'>
               <h1> Somos MIBAF </h1>
           </Link>
           <div className="Categories">
               <Link to='/category/Ropa Interior Femenina' className="Option">Ropa Interior Femenina</Link>
               <Link to='/category/Ropa Interior Masculina' className="Option">Ropa Interior Masculina</Link>
               <Link to='/category/Ropa Interior para la niñez' className="Option">Ropa Interior para la niñez</Link>
           </div>
           <CartWidget />
       </nav>
        )
    }

export default Navbar;