import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../spotify/classes/playlist';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() playlist : Playlist;
  constructor() { }

  ngOnInit() {
  }

}
