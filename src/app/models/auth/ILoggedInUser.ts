import { ILoginError } from './ILoginError';

export default interface ILoggedInUser {
    isLoggedIn: boolean,
    email?: string,
    profilePicture?: string,
    displayName?: string,
    token?: string,
    uuid?: string,
    error?: ILoginError
}