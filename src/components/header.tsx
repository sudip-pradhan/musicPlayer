import React from 'react';
import './header.css';
import { observer } from 'mobx-react';
import stores from '../stores';
import { AppBar, Button, Grid, IconButton, Paper, styled, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Header = observer( () => {
  let navigate = useNavigate();

  return(
    <div className='header-container'>
    <AppBar position="static" className='appbar' style={{ background: '#7faaff' }}>
      <Toolbar className='toolbar'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={()=>{
            console.log(stores.headerStore.flag,'af')
            stores.headerStore.togleFlag()
          }}>
          <Menu />
        </IconButton>
        <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
          {stores.headerStore.flag?'he':'she'}
        </Typography>
        <Button variant="outlined" className='outbutton'>Outlined</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
})

export default Header;