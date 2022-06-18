import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Standart_notation from './Pages/Standart_notation';
import Construction_page from './Pages/Construction_page';
import Menu from './Pages/Menu_bottom';
import Profile from './Pages/Profile';
import Retirement from './Pages/Retirement';
import Directors_control from './Pages/Directors_panel';
import Sinc_wall from './Pages/Sinc_wall';
import Partner_teachers from './Pages/Partner_teachers';

const App_routes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Standart_notation /> } />
      <Route path='/apontamento' element={ <Standart_notation /> } />
      <Route path='/em-construcao' element={ <Construction_page /> } />
      <Route path='/menu' element={ <Menu /> } />
      <Route path='/perfil' element={ <Profile /> } />
      <Route path='/desligamento' element={ <Retirement /> } />
      <Route path='/direx' element={ <Directors_control /> } />
      <Route path='/mural' element={ <Sinc_wall /> } />
      <Route path='/professores-parceiros' element={ <Partner_teachers /> } />
    </Routes>
  );
}

export default App_routes;