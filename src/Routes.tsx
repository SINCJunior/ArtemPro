import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Standart_notation from './pages/Standart_notation';
import Construction_page from './pages/Construction_page';
import Menu from './pages/Menu_bottom';
import Profile from './pages/Profile';
import Retirement from './pages/Retirement';
import Directors_control from './pages/Directors_panel';
import Sinc_wall from './pages/Sinc_wall';
import Partner_teachers from './pages/Partner_teachers';
import Stopwatch from './pages/Stopwatch';
import Login from './pages/Login';
import Pass_recover from './pages/Pass_recover';

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
      <Route path='/cronometro' element={ <Stopwatch /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/recuperacao-senha' element={ <Pass_recover /> } />
    </Routes>
  );
}

export default App_routes;