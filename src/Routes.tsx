import React from 'react';

import { Routes, Route } from 'react-router-dom';

import StandartNotation from './pages/StandartNotation';
import ConstructionPage from './pages/ConstructionPage';
import Menu from './pages/MenuBottom';
import Profile from './pages/Profile';
import Retirement from './pages/Forms/Retirement';
import DirectorsControl from './pages/DirectorsPanel';
import PartnerTeachers from './pages/PartnerTeachers';
import Stopwatch from './pages/Stopwatch';
import Login from './pages/Login';
import PassRecover from './pages/PassRecover';
import Break from './pages/Forms/Break';
import Absence from './pages/Forms/Absence';
import Ombudsman from './pages/Forms/Ombudsman';
import AddNotation from './pages/AddNotation';
import Tasks from './pages/Tasks';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Tasks /> } />
      <Route path='/apontamento' element={ <StandartNotation /> } />
      <Route path='/em-construcao' element={ <ConstructionPage /> } />
      <Route path='/menu' element={ <Menu /> } />
      <Route path='/perfil' element={ <Profile /> } />
      <Route path='/desligamento' element={ <Retirement /> } />
      <Route path='/afastamento' element={ <Break /> } />
      <Route path='/justificativa-de-falta' element={ <Absence /> } />
      <Route path='/ouvidoria' element={ <Ombudsman /> } />
      <Route path='/direx' element={ <DirectorsControl /> } />
      <Route path='/parcerias' element={ <PartnerTeachers /> } />
      <Route path='/cronometro' element={ <Stopwatch /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/recuperacao-senha' element={ <PassRecover /> } />
      <Route path='/adicionar-apontamento' element={ <AddNotation /> } />
      <Route path='/tarefas' element={ <Tasks />} />
    </Routes>
  );
}

export default AppRoutes;