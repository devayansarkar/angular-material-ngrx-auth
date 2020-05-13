import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { from } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _userAuthState: Observable<firebase.User>;
  constructor(private _firebaseAuth: AngularFireAuth) {
    this._userAuthState = _firebaseAuth.authState
  }

  loginUsingEmailAndPassword(email, password) {
    return from(this._firebaseAuth.auth
      .signInWithEmailAndPassword(email, password))
  }

  setSessionValidity(isLongLivedSession) {
    if (isLongLivedSession)
      return from(this._firebaseAuth.auth
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL))
    else return from(this._firebaseAuth.auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION))
  }

  getUserAuth() {
    return this._userAuthState
  }

  logout() {
    return from(this._firebaseAuth.auth.signOut())
  }
}