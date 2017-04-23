import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify/provider';
import { Playlist } from '../spotify/classes/playlist';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists : Playlist[] ;

  constructor(private spotify : SpotifyService) {}

  ngOnInit() {
    this.spotify.userPlaylists()
        .subscribe(playlists => { this.playlists = playlists.items},
                    error => console.log(error));
  }

}
