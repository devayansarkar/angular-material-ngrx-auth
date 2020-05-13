import { createReducer, on } from '@ngrx/store';
import initialLoggedInUserState from './auth.state';
import {
    loginSessionValidityEvent, loginSessionValiditySuccessEvent, loginSessionValidityFailureEvent,
    loginEvent, loginSuccessEvent, loginFailureEvent,
    logoutEvent, logoutSuccessEvent, logoutFailureEvent,
    appBootEvent, appBootEventSessionAvailable, appBootEventSessionUnavailable
} from './auth.actions';
import ILoggedInUser from "src/app/models/auth/ILoggedInUser";

const _authReducer = createReducer(initialLoggedInUserState,

    on(loginSessionValidityEvent, (state) => session(state)),
    on(loginSessionValiditySuccessEvent, (state) => sessionSuccess(state)),
    on(loginSessionValidityFailureEvent, (state) => sessionFailure(state)),

    on(loginEvent, (state) => login(state)),
    on(loginSuccessEvent, (state, user) => loginSuccess(state, user)),
    on(loginFailureEvent, (state, user) => loginFailure(state, user)),

    on(logoutEvent, (state) => logout(state)),
    on(logoutSuccessEvent, (state) => logoutSuccess(state)),
    on(logoutFailureEvent, (state) => logoutFailure(state)),

    on(appBootEvent, (state) => appBoot(state)),
    on(appBootEventSessionAvailable, (state, input) => appBootEventSuccess(state, input)),
    on(appBootEventSessionUnavailable, (state) => appBootEventFailure(state)),
);


function session(state): ILoggedInUser {
    return { ...state }
}

function sessionSuccess(state): ILoggedInUser {
    return { ...state }
}

function sessionFailure(state): ILoggedInUser {
    return { ...state }
}

function appBoot(state): ILoggedInUser {
    return { ...state }
}

function appBootEventSuccess(state, input): ILoggedInUser {
    if (input.authenticatedUser.email !== null || input.authenticatedUser.email || undefined) {
        return {
            ...state,
            email: input.authenticatedUser.email,
            uuid: input.authenticatedUser.uuid,
            displayName: input.authenticatedUser.displayName || input.authenticatedUser.email,
            token: input.authenticatedUser.token,
            isLoggedIn: true
        }
    } else {
        return { ...state, isLoggedIn: true }
    }
}

function appBootEventFailure(state): ILoggedInUser {
    return { ...state }
}

function login(state): ILoggedInUser {
    return { ...state }
}

function loginSuccess(state, input): ILoggedInUser {
    return {
        ...state,
        email: input.authenticatedUser.email,
        uuid: input.authenticatedUser.uuid,
        displayName: input.authenticatedUser.displayName || input.authenticatedUser.email,
        token: input.authenticatedUser.token,
        isLoggedIn: true
    }
}

function loginFailure(state, error): ILoggedInUser {
    return { ...state, error: { code: error.err.code, message: error.err.message }, isLoggedIn: false }
}

function logout(state): ILoggedInUser {
    return { ...state, isLoggedIn: false }
}

function logoutSuccess(state): ILoggedInUser {
    return { isLoggedIn: false }
}

function logoutFailure(state): ILoggedInUser {
    return { ...state }
}

export function authReducer(state, action) {
    return _authReducer(state, action);
}