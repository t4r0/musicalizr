import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Playlist } from './classes/playlist';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class SpotifyService {
  rootURI : string = "https://api.spotify.com/v1/"
  headers : any;

  constructor(private http : Http, private auth : AuthService){

  }

  userPlaylists() : Observable<any> {
    var endpoint = this.rootURI + 'me/playlists'
    let options = this.getHeaders();
    return this.http.get(endpoint, options)
           .map(this.extractData)
           .catch(this.handleError);
  }

  playlistTracks(userId : string, playlistId : string) {
    var endpoint = `${this.rootURI}users/${userId}/playlists/${playlistId}/tracks`
    let options = this.getHeaders();
    return this.http.get(endpoint, options)
           .map(this.extractData)
           .catch(this.handleError);
  }

  private getHeaders() : RequestOptions {
    var headers = new Headers({'Authorization' : `Bearer ${this.auth.currentUser().token}`});
    var options = new RequestOptions({headers: headers});
    return options;
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {}
  }
}
