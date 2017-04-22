import { Component } from '@angular/core';

@Component({
  selector: 'spotify-login-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class SpotifyLoginButton {

  constructor() {
  }

  login() : void {
    var params = 'client_id=0751903c1b62406880128de801b635f9&response_type=token&redirect_uri=http://localhost:4200/callback';
    var options = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,left=100,top=10,width=400,height=500';
    window.open('https://accounts.spotify.com/authorize?'+params, 'Spotify',options);

    window.addEventListener('message', (event) => {
     var hash = JSON.parse(event.data);
     if (hash.type == 'access_token_spotify') {
        console.log(hash);
     }
    }, false)

  }

}
