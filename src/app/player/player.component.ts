import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Playlist } from '../spotify/classes/playlist';
import { Track } from '../spotify/classes/track';
import { SpotifyService } from '../spotify/provider';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const scrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollY: true,
  suppressScrollX: false
};

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() playlist : Playlist;
  tracks : Track[];
  config = scrollbarConfig;
  
  constructor(private spotify : SpotifyService) { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log(changes)
    let newPlaylist = changes.playlist.currentValue;
    if(newPlaylist.id){
      this.spotify.playlistTracks(newPlaylist.owner.id, newPlaylist.id)
      .subscribe((tracks) => this.tracks = tracks.items, (error) => console.log(error));
    }

  }
}
