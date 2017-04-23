import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {
  user : any;
  constructor(private auth : AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser();
  }

  logout() {
    this.auth.logout();
  }

}
