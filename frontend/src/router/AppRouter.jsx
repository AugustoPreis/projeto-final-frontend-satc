import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('../login/Login'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const Manutencao = lazy(() => import('../manutencao/Manutencao'));
const Cliente = lazy(() => import('../cliente/Cliente'));
const Usuario = lazy(() => import('../usuario/Usuario'));

export default function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/manutencao' element={<Manutencao />} />
        <Route path='/cliente' element={<Cliente />} />
        <Route path='/usuario' element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
}