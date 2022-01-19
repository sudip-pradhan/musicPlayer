import { action, makeAutoObservable } from 'mobx'
import axios from 'axios';
import { randomInt } from 'crypto';

const apiKey = 'AIzaSyCUcgdfc5fwNwgqXPyUJCbTYNPwA2opx-Y'

interface thumbnailsInterface {
    default: string,
    high: string,
    maxres: string,
    medium: string,
    standard: string,
}

interface playListInterface {
    videoId: String,
    description: string,
    position: string,
    title: string,
}

export default class YTPlaylistStore {

    public flag: boolean = false

    public playList: playListInterface[] = []

    public thumbnails: thumbnailsInterface[] = []

    public player: any = undefined

    public sliderValue: number = 0

    public togleFlag = () => {
        this.flag = !this.flag
    }

    @action
    public sliderChange = (event: Event, newValue: number | number[]) => {
        this.sliderValue = newValue as number
        this.player.seekTo((this.player.getDuration()*this.sliderValue)/1000000);
    }

    public valueLabelFormat(){

        let sec = (this.player.getDuration()*this.sliderValue)/1000000
        let min = sec/60
        sec = sec%60
        return `${min}:${sec}`;
    }

    public onPlayerReady(event: any, videoId: string) {
        this.player = event.target
        
        //this.player.loadVideoById(videoId, 0, 'tiny') 
        console.log(this.player)
    }

    public playPlayer() {
        this.player.loadPlaylist(this.playList.map((list)=>{
            return list.videoId
        }),Math.floor(Math.random() * (this.playList.length)))
        this.player.setShuffle(true)
        this.player.playVideo()
    }

    public pausePlayer() {
        this.player.pauseVideo()
    }

    public setPlayerQuality() {
        this.player.setPlaybackQuality('240p')
    }

    public searchVideo = () => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: 'dog',
                part: 'snippet',
                maxResults: 5,
                key: apiKey
            },
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        })
    }

    public listPlaylistItems = (pageToken: String, callback: Function) => {
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems', {
            params: {
                playlistId: 'PLWYy_uVtRhxSFGSS8WaRHrhY_HulH0nbL',
                pageToken: pageToken === ''? undefined: pageToken,
                part: 'snippet,contentDetails',
                maxResults: 50,
                key: apiKey
            },
        }).then((response) => {

            this.playList = [ 
                ...this.playList,
                ...response.data.items.map((item: any) => {
                return {
                    videoId: item.contentDetails.videoId,
                    description: item.snippet.description,
                    position: item.snippet.position,
                    title: item.snippet.title,
                }
            }) ]
            
            this.thumbnails = [ 
                ...this.thumbnails,
                ...response.data.items.map((item: any) => {
                return {
                    default: item.snippet.thumbnails.default.url,
                    high: item.snippet.thumbnails.high.url,
                    medium: item.snippet.thumbnails.medium.url,
                }
            }) ]

            if(response.data.nextPageToken)
            {
                callback(response.data.nextPageToken, callback)
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    constructor() {
        makeAutoObservable(this)
    }
}