import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'We are building an awesome app, come back soon!';

  constructor() { }

  ngOnInit() {
  }

}
