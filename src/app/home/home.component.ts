import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'We are building an awesome app, come back soon!';

  constructor(public auth : AuthService ) { }

  ngOnInit() {
  }

}
