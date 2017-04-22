import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SpotifyLoginButton } from './spotify/login/login-button.component';
import PostMessageService from './spotify/login.component';

const routes : Routes = []

@NgModule({
  declarations: [
    AppComponent,
    SpotifyLoginButton,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [PostMessageService, SpotifyLoginButton],
  bootstrap: [AppComponent]
})
export class AppModule { }
