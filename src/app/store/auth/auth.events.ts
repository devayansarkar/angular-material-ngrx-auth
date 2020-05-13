
export const LOGIN_SESSION_VALIDITY_EVENT = '[AUTHENTICATION] login session';
export const LOGIN_SESSION_VALIDITY_EVENT_SUCCESS = '[AUTHENTICATION] login session success';
export const LOGIN_SESSION_VALIDITY_EVENT_FAILURE = '[AUTHENTICATION] login session failure';

export const LOGIN_EVENT = '[AUTHENTICATION] login';
export const LOGIN_EVENT_SUCCESS = '[AUTHENTICATION] login success';
export const LOGIN_EVENT_FAILURE = '[AUTHENTICATION] login failure';

export const LOGOUT_EVENT = '[AUTHENTICATION] logout';
export const LOGOUT_EVENT_SUCCESS = '[AUTHENTICATION] logout success';
export const LOGOUT_EVENT_FAILURE = '[AUTHENTICATION] logout failure';

export const APP_BOOT_EVENT = '[INITIAL_STATE] app boot'
export const APP_BOOT_EVENT_SESSION_AVAILABLE = '[INITIAL_STATE] app auth exists'
export const APP_BOOT_EVENT_SESSION_UNAVAILABLE = '[INITIAL_STATE] app auth does not exists'