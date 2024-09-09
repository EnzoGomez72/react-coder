import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Base from './layout/Base';
import Home from './pages/Home/Index';
import Store from './pages/Store/Index';
import Detail from './pages/Detail/Index';

function App() {
  
  return (
    
    <BrowserRouter>
      <Base>
        <Routes>
          <Route  exact path='/' element={<Home/>}/>
          <Route  exact path='/tienda' element={<Store/>}/>
          <Route  exact path='/tienda/:id' element={<Store/>}/>
          <Route exact path='/detalle/:id' element={<Detail />}/>
        </Routes>
      </Base>
    </BrowserRouter>
    
  )
}

export default App
