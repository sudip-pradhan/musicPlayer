import React, { useState } from 'react';
import { Button, Grid, Paper, Slider, styled } from '@mui/material';
import { observer } from 'mobx-react';
import { Navigate } from 'react-router-dom';
import stores from '../../stores';
import './YTPlaylist.css';
import YouTube from 'react-youtube';

const YTPlayer = observer(() => {
    const { headerStore, ytPlaylistStore } = stores
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'cyan'
    }));
    const videoId = 'AVblOqZBlJw'

    

    return (
        <Grid item container xs={12} spacing={2}>
            <Grid item xs={12} >
                <Item elevation={6}>
                    <YouTube
                        onReady={(event) => ytPlaylistStore.onPlayerReady(event, videoId)}
                    />

                </Item>
            </Grid>
        </Grid>
    );
})

export default YTPlayer;