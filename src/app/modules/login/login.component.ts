import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { loginSessionValidityEvent, loginEvent } from '../../store/auth/auth.actions'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import ILoggedInUser from '../../models/auth/ILoggedInUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = true;
  hide = true;
  loginFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<{ authenticatedUser: ILoggedInUser }>,
    private _router: Router,
    private _snackBar: MatSnackBar) {
    this.observeLoginState();
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
    this._store.dispatch(loginSessionValidityEvent({
      isLongLived: true
    }))
  }

  private observeLoginState() {
    this._store.pipe(select('authenticatedUser')).subscribe((user) => {
      if (user.isLoggedIn) {
        this._router.navigate(['/home']);
      }
      if (this.isFailedLoginAttempt(user)) {
        this._snackBar.open(user.error.message, 'ok', {
          duration: 3000
        });
      }
    });
  }

  private isFailedLoginAttempt(user: ILoggedInUser) {
    return !user.isLoggedIn &&
      user.error &&
      user.error.code &&
      user.error.message;
  }

  handleChangeInSessionsValidity(event) {
    this._store.dispatch(loginSessionValidityEvent({
      isLongLived: event.remember
    }))
  }

  login(event) {
    this._store.dispatch(loginEvent({
      loginEventRequest: { email: event.email, password: event.password }
    }))
  }
}
