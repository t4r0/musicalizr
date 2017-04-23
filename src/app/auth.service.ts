import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private user: any = {};

  constructor(private http : Http){

  }

  currentUser() : any {
    let user = localStorage.getItem('pixela-angular-attack-user');
    if(user){
      this.user = user;
      return this.user;
    }
    return null
  }

  setUser(token: string) : Observable<any>{
    this.user.token = token;
    let headers = new Headers({'Authorization':`Bearer ${token}`})
    let options = new RequestOptions({headers: headers});

    return this.http.get('https://api.spotify.com/v1/me', options)
      .map( response => {
        let userData = response.json() || {};
        userData.token = token;
        localStorage.setItem('pixela-angular-attack-user', userData)
        return userData;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
