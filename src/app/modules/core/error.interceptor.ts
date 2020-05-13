import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import ILoggedInUser from '../../models/auth/ILoggedInUser';
import { logoutEvent } from '../../store/auth/auth.actions';

@Injectable()
export class AppErrorInterceptor implements HttpInterceptor {

    constructor(private _store: Store<{ authenticatedUser: ILoggedInUser }>) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                this._store.dispatch(logoutEvent())
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}