import PostMessageService from '../login.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'spotify-login-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class SpotifyLoginButton {
  constructor(public dialogCallback : PostMessageService, public router : Router) {
    this.dialogCallback.addPostMessageListener((event) => {
      console.log("hola");
    })
  }

  login() : void {
    var params = 'client_id=0751903c1b62406880128de801b635f9&response_type=token&redirect_uri=/login&show_dialog=true';
    var options = 'left=100,top=10,width=400,height=500';
    window.open('https://accounts.spotify.com/authorize&'+params, 'Spotify',options);
  }
}
