import './App.css';
//import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
//import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import Button from './components/Button/Button';
//import MercadoLibre from './components/MercadoLibre/MercadoLibre'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element={<ItemListContainer greeting='¡Entrá a chusmear!'/>}/>
          <Route path = '/category/:categoryId' element={<ItemListContainer greeting='¡Encontrá lo que buscas!' />}/>
          <Route path = '/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path = '*' element={<h1>¡UPS! Nos desviamos </h1>}
        </Routes>    
        
        <Counter stock={3} onAdd={handleOnAdd} />
        {/*}  <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>*/}
        {/*<Button />*/}
        {/*<MercadoLibre />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
