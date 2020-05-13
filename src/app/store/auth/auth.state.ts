import ILoggedInUser from "src/app/models/auth/ILoggedInUser";

const initialLoggedInUserState: ILoggedInUser = {
    isLoggedIn: false
}
export const authenticationFeatureKey = 'authenticatedUser';
export default initialLoggedInUserState