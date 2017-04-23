import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SpotifyLoginButton } from './spotify/login-button/login-button.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './spotify/callback/callback.component';

import { AuthService } from './auth.service';

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SpotifyLoginButton,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
