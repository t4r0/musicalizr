import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Preview your spotify playlists with animations';

  constructor(public auth : AuthService ) { }

  ngOnInit() {
  }

}
