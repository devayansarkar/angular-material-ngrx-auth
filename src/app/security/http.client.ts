import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Store, select } from '@ngrx/store';
import ILoggedInUser from '../models/auth/ILoggedInUser';

@Injectable()
export class AppHttpClient {
   
    authenticatedUser: ILoggedInUser = { isLoggedIn: false }

    constructor(private _http: Http, private _store: Store<{ authenticatedUser: ILoggedInUser }>) {
        this._store.pipe(select('authenticatedUser')).subscribe((item) => {
            this.authenticatedUser = item
        })
    }

    createAuthorizationHeader(headers: Headers) {
        if (this.authenticatedUser.isLoggedIn) {
            headers.append('Bearer', `Authorization ${this.authenticatedUser.token}`);
        }
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this._http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this._http.post(url, data, {
            headers: headers
        });
    }

    put(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this._http.put(url, data, {
            headers: headers
        });
    }
}