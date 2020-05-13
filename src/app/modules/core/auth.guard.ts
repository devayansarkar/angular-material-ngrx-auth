import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import ILoggedInUser from '../../models/auth/ILoggedInUser';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private _router: Router, private _store: Store<{ authenticatedUser: ILoggedInUser }>) {
    }

    canActivate(): Observable<boolean> {
        return this._store.pipe(select('authenticatedUser')).pipe(map((user: ILoggedInUser) => {
            if (user.isLoggedIn && user.email) {
                return true
            }
            else {
                this._router.navigate(['/login']);
                return false
            }
        }), catchError(() => {
            this._router.navigate(['/login']);
            return of(false);
        }))
    }
}