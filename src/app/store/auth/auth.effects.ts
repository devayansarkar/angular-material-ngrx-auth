import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, mergeMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/auth/auth.service';
import { of } from 'rxjs';
import {
    loginEvent,
    logoutEvent,
    loginSuccessEvent,
    loginFailureEvent,
    logoutSuccessEvent,
    logoutFailureEvent,
    appBootEventSessionAvailable,
    appBootEventSessionUnavailable,
    appBootEvent,
    loginSessionValidityEvent,
    loginSessionValiditySuccessEvent,
    loginSessionValidityFailureEvent
} from './auth.actions';
import { mapToLoggedInUser, mapSessionToUser } from '../../utilities/mappers/auth.model.mapper';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private _actions$: Actions,
        private _authenticationService: AuthenticationService
    ) { }

    setInitialAuthState$ = createEffect(() => this._actions$.pipe(
        ofType(appBootEvent),
        mergeMap(() => this._authenticationService.getUserAuth().pipe(
            map((authenticationResponse) => appBootEventSessionAvailable({ authenticatedUser: mapSessionToUser(authenticationResponse) })),
            catchError(() => of(appBootEventSessionUnavailable()))))
    ))

    setSessionValidity$ = createEffect(() => this._actions$.pipe(
        ofType(loginSessionValidityEvent),
        exhaustMap(payload => this._authenticationService.setSessionValidity(payload.isLongLived).pipe(
            map(() => loginSessionValiditySuccessEvent()),
            catchError(() => of(loginSessionValidityFailureEvent())))))
    )

    loginUsingEmailAndPassword$ = createEffect(() => this._actions$.pipe(
        ofType(loginEvent),
        exhaustMap(payload => this._authenticationService.loginUsingEmailAndPassword(payload.loginEventRequest.email, payload.loginEventRequest.password).pipe(
            map((authenticationResponse) => loginSuccessEvent({ authenticatedUser: mapToLoggedInUser(authenticationResponse) })),
            catchError((err) => of(loginFailureEvent({ err: err }))))))
    )

    logout$ = createEffect(() => this._actions$.pipe(
        ofType(logoutEvent),
        exhaustMap(() => this._authenticationService.logout().pipe(
            map(() => logoutSuccessEvent()),
            catchError(() => of(logoutFailureEvent())))))
    )
}