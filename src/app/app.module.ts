import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { SpotifyLoginButton } from './spotify/login-button/login-button.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './spotify/callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaylistComponent } from './playlist/playlist.component';

import { AuthService } from './auth.service';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SpotifyService } from './spotify/provider';

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'dashboard', component: DashboardComponent}
]

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpotifyLoginButton,
    HomeComponent,
    CallbackComponent,
    DashboardComponent,
    PlaylistComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [AuthService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
