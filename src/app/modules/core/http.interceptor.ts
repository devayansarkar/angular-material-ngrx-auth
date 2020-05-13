import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import ILoggedInUser from '../../models/auth/ILoggedInUser';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppClientHttpInterceptor implements HttpInterceptor {

    authenticatedUser: ILoggedInUser = { isLoggedIn: false }

    constructor(private _store: Store<{ authenticatedUser: ILoggedInUser }>) {
        this._store.pipe(select('authenticatedUser')).subscribe((item) => {
            this.authenticatedUser = item
        })
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticatedUser.isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticatedUser.token}`,
                    uuid: this.authenticatedUser.uuid
                }
            });
        }
        return next.handle(request);
    }
}