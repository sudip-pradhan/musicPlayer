import React from 'react';
import './App.css';
import { Button, Grid } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header/header';
import Sidebar from './components/sidebar';
import YTPlaylist from './pages/YTPlaylist/YTPlaylsit';
import Body from './components/body/body';

function App() {

  let navigate = useNavigate();

  return (
    <Grid container spacing={3} direction='column' className='App'>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Routes>
          <Route path="/" element={< YTPlaylist />} />
          <Route path='/tempMusicPlayer' element={< YTPlaylist />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
