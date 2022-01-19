import { action, makeAutoObservable } from 'mobx'
import axios from 'axios';

const apiKey = 'AIzaSyCUcgdfc5fwNwgqXPyUJCbTYNPwA2opx-Y'

export default class HeaderStore {

    flag: boolean = false

    player: any = undefined

    public togleFlag = () => {
        this.flag = !this.flag
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

    public listPlaylistItems = () => {
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems', {
            params: {
                playlistId: 'PLBCF2DAC6FFB574DE',
                part: 'snippet,contentDetails',
                maxResults: 5,
                key: apiKey
            },
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        })
    }

    constructor() {
        makeAutoObservable(this)
    }
}