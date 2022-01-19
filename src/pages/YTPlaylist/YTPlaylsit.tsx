import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, Slider, styled } from '@mui/material';
import { observer } from 'mobx-react';
import { Navigate } from 'react-router-dom';
import stores from '../../stores';
import './YTPlaylist.css';
import YouTube from 'react-youtube';
import YTPlayer from './YTPlayer';

const YTPlaylist = observer(() => {
    const { headerStore, ytPlaylistStore } = stores
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'cyan'
    }));
    const videoId = 'AVblOqZBlJw'

    useEffect(() => {
        ytPlaylistStore.listPlaylistItems('', (pageToken: String, callback: Function)=>ytPlaylistStore.listPlaylistItems(pageToken, callback))
      },[]);

    return (
        <Grid container spacing={2} direction='column' alignContent={'center'} className='YTPlayer-container-grid'>
            <Grid item >
                <YTPlayer />
            </Grid>
            <Grid item container xs={12} spacing={2} justifyContent={'center'}>
                <Grid item xs={12} justifyContent={'center'}>
                    <Item elevation={6}>
                        <img src='' alt='' />
                    </Item>
                </Grid>

                <Grid item container xs={12} spacing={2} justifyContent={'center'}>
                    <Grid item container xs={12} spacing={1} justifyContent={'center'}>
                        <Grid item xs={12} justifyContent={'center'}>
                            <Item>

                            </Item>
                        </Grid>
                        <Grid item xs={12} justifyContent={'center'}>
                            <Item>

                            </Item>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} justifyContent={'center'}>
                        <Grid item xs={12} justifyContent={'center'}>
                            <Slider max={1000000}  step={0.0001} value={ytPlaylistStore.sliderValue} valueLabelDisplay={'auto'} onChange={ytPlaylistStore.sliderChange} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2}>
                <Grid item xs={6}>
                    <Item elevation={6}>
                        <Button onClick={() => ytPlaylistStore.playPlayer()}> play </Button>
                    </Item>

                </Grid>
                <Grid item xs={6}>
                    <Item elevation={6}>
                        <Button onClick={() => ytPlaylistStore.setPlayerQuality()}> set quality </Button>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
    );
})

export default YTPlaylist;