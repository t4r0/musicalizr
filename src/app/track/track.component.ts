import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../spotify/classes/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track : Track;

  constructor() { }

  ngOnInit() {
  }

}
