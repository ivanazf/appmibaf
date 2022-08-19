import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
//import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import MercadoLibre from './components/MercadoLibre/MercadoLibre'

const Notification = ({message, severity}) => {
  //const notificationStyles = {
  //  position: 'absolute',
  //  top: 100,
  //  right: 10,
  //  padding: 10 px 20 px 20 px 10 px,
  //  background-color: 'seagreen',
  //  color: 'black',
  //}
  return (
    <div /*style={notificationStyle}*/>
      Esto es un mensaje
    </div>
  )
}

function App() {

  const [message, setMessage] = useState('Mensaje incial')
  //const [severity]
  return (
    <div className="App">
      <BrowserRouter>
        <Notification message={message}/>
        <Navbar />
        <Routes>
          <Route path = '/' element={<ItemListContainer greeting='¡Entrá a chusmear!'/>}/>
          <Route path = '/category/:categoryId' element={<ItemListContainer greeting='¡Encontrá lo que buscas!' />}/>
          <Route path = '/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path = '*' element={<h1>¡UPS! Nos desviamos </h1>} />
        </Routes> 
        
        {/*<Counter stock={3} onAdd={handleOnAdd} />*/}
        {/*}  <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
