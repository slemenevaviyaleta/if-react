import {AUTH} from "./actionTypes";
import {authStatuses} from "./authStatuses";

export const loginAction = {
    type: AUTH.login,
    payload: authStatuses.loggedIn
};

export const logoutAction = {
    type: AUTH.logout,
    payload: authStatuses.loggedOut
}