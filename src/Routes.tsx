import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Standart_notation from './Pages/Standart_notation';
import Construction_page from './Pages/Construction_page';

const App_routes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Standart_notation /> } />
      <Route path='/apontamento' element={ <Standart_notation /> } />
      <Route path='/em-construcao' element={ <Construction_page /> } />
    </Routes>
  );
}

export default App_routes;