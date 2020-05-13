import ILoggedInUser from 'src/app/models/auth/ILoggedInUser';

export function mapToLoggedInUser(authenticationResponse): ILoggedInUser {
    return {
        email: authenticationResponse.user.email,
        isLoggedIn: true,
        uuid: authenticationResponse.user.uid,
        token: authenticationResponse.user.xa
    };
}

export function mapSessionToUser(authenticationResponse): ILoggedInUser {
    return {
        email: authenticationResponse.email,
        isLoggedIn: true,
        uuid: authenticationResponse.uid,
        token: authenticationResponse.xa
    };
}