import { Component, OnInit } from '@angular/core';
import { Playlist } from '../spotify/classes/playlist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  playlist : any = {};
  constructor() { }

  ngOnInit() {
  }

  setPlaylist(playlist) {
    console.log(playlist);
    this.playlist = playlist;
  }

}
