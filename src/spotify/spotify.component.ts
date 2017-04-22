import {Component, provide} from 'angular2/core';
import SpotifyService from 'angular2-spotify/angular2-spotify';

@Component({
    providers: [
        SpotifyService,
        provide("SpotifyConfig", {
            useValue: {
                clientId: '0751903c1b62406880128de801b635f9',
                redirectUri: 'https://angular-attack-b5838.firebaseapp.com/callback',
                scope: 'playlist-read-private playlist-read-collaborative user-library-read',
                // If you already have an auth token
                authToken: localStorage.getItem('angular2-spotify-token')
            }
        })
    ]
})
export class SpotifyPlayer {
  constructor(private spotifyService: SpotifyService) {}
}
