import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';

import Base from './layout/Base';
import Home from './pages/Home/Index';
import Store from './pages/Store/Index';
import Detail from './pages/Detail/Index';
import Cart from './pages/Cart/Index';
import Update from './pages/Update/Index';
import Contacto from './pages/Contacto/Index';




function App() {
  
  return (
    
  <CartContextProvider>
    <BrowserRouter>
        <Base>
          <Routes>
            <Route  exact path='/' element={<Home/>}/>
            <Route  exact path='/tienda' element={<Store/>}/>
            <Route  exact path='/tienda/:category' element={<Store/>}/>
            <Route exact path='/detalle/:id' element={<Detail />}/>
            <Route  exact path='/carrito' element={<Cart/>}/>
            <Route  exact path='/update' element={<Update/>}/>
            <Route  exact path='/contacto' element={<Contacto/>}/>
          </Routes>
        </Base>
    </BrowserRouter>
  </CartContextProvider>
    
  )
}

export default App
