import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Playlist } from './classes/playlist';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  rootURI : string = "https://api.spotify.com/v1/"
  headers : any;

  constructor(private http : Http, private auth : AuthService){

  }

  userPlaylists() : Observable<Playlist[]> {
    var headers = new Headers({'Authorization' : `Bearer ${this.auth.currentUser().token}`});
    var options = new RequestOptions({headers: headers});
    var endpoint = this.rootURI + 'me/playlists'
    return this.http.get(endpoint, options)
           .map(this.extractData)
           .catch(this.handleError);
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
    return body.data || {}
  }
}
