import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import ILoggedInUser from '../../models/auth/ILoggedInUser';

@Injectable()
export class AuthGuardService implements CanActivate {
    authenticatedUser: ILoggedInUser = { isLoggedIn: false }
    constructor(private _router: Router, private store: Store<{ authenticatedUser: ILoggedInUser }>) {
        this.store.pipe(select('authenticatedUser')).subscribe((item) => {
            console.log(item)
            this.authenticatedUser = item
        })
    }
    canActivate(): boolean {
        if (this.isUnAuthenticatedUser()) {
            this._router.navigate(['login']);
            return false;
        }
        return true;
    }

    private isUnAuthenticatedUser() {
        console.log(this.authenticatedUser)
        return !this.authenticatedUser.isLoggedIn;
    }
}