import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Playlist } from './classes/playlist';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  rootURI : string = "https://api.spotify.com/v1/"
  headers : any;

  constructor(private http : Http){

  }

  userPlaylists() : Observable<Playlist[]> {
    var endpoint = this.rootURI + 'me/playlists'
    return this.http.get(endpoint)
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
