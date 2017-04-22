import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'spotify-login-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class SpotifyLoginButton {
  constructor(public router : Router) {
  }

  login() : void {
    var params = 'client_id=0751903c1b62406880128de801b635f9&response_type=token&redirect_uri=http://localhost:4200/callback&show_dialog=true';
    var options = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,left=100,top=10,width=400,height=500';
    var w  = window.open('https://accounts.spotify.com/authorize?'+params, 'Spotify',options);


    w.addEventListener('message',(event) => {
      var hash = JSON.parse(event.data);
      if (hash.type === 'access_token_spotify'){
        console.log(hash);
      }
      w.close();
    }, false);

  }
}
