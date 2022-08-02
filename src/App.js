//import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Button from './components/Button/Button';


function App() {
  //const [show, setShow] = useState(true)
  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity}`);
  }
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='¡Hi to everybody!' />
      <Counter stock={2} onAdd={handleOnAdd} />
      {/*}  <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>*/}
      {/*<Button />*/}
    </div>
  );
}

export default App;
