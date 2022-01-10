import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Test from './pages/test';

function App() {
  
  let navigate= useNavigate();
  
  return (
    <div className='App'>
      <Header />
      <Routes>
      <Route  path='/' element={< Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
