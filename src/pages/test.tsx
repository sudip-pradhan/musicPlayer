import React from 'react';
import { Button, Grid, Paper, styled } from '@mui/material';
import { Navigate } from 'react-router-dom';
import stores from '../stores';
import './test.css';
import YouTube from '@u-wave/react-youtube';


function Test() {
  const { headerStore }=stores
  const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const videoId='AVblOqZBlJw'

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    function onPlayerReady(event: any) {
      headerStore.player = event.target
      setPlayerQuality()
      console.log(headerStore.player)
    }

    function playPlayer(){
     headerStore.player.playVideo()
     console.log(headerStore.player.getPlaybackQuality())
    }

    function pausePlayer(){
      headerStore.player.pauseVideo()
    }

    function setPlayerQuality(){
      headerStore.player.setPlaybackQuality('tiny')
      console.log(headerStore.player.getPlaybackQuality())
    }

    return (
      <Grid container spacing={2} className='testgrid'>
        <Grid item xs={12}>
          <Item >
            <YouTube video='4xW5dqEZQu0'
              height= '390'
              width= '640'
              autoplay= {false}
              suggestedQuality = 'tiny'
              onReady={onPlayerReady}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Button onClick={()=>playPlayer()}> play </Button>
          </Item>
          <Item>
            <Button onClick={()=>setPlayerQuality()}> set quality </Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Button onClick={()=>headerStore.listPlaylistItems()}> list </Button>
          </Item>
        </Grid>
      </Grid>
    );
}

export default Test;