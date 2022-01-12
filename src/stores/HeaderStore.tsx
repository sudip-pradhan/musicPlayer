import { action, observable, makeAutoObservable } from 'mobx'
import axios from 'axios';

const apiKey = 'AIzaSyCUcgdfc5fwNwgqXPyUJCbTYNPwA2opx-Y'
const myid = '2b6b51ad61d041de8f92a8246176ec3a'
const mysecret = 'e807188c707344ca934711fba1557e6a'
var scope = 'user-read-private user-read-email';

export default class HeaderStore {

    flag: boolean = false

    player: any = undefined

    public togleFlag = () => {
        this.flag = !this.flag
    }

    public searchVideo = () =>{
        axios.get('https://www.googleapis.com/youtube/v3/search',{
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

    public getAuthToken = () =>{
        axios.post('https://accounts.spotify.com/authorize',{
            params: {
                response_type: 'code',
                client_id: myid,
                scope: scope,
                redirect_uri: 'http://localhost:3000/tempMusicPlayer',
                state: '1029384756123456'
            },
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        })
    }

    public listPlaylistItems = () =>{
        axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems',{
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

    constructor(){
        makeAutoObservable(this)
    }
}