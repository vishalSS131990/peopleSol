import { authActions } from '../actionTypes';
//////////////////////////////////////
///////API Calls start Here///////////
//////////////////////////////////////
//Login API
export const userLogin = (params) => {
};

//Store Action
export const loginSuccess = () => {
    return { type: authActions.LOGIN_SUCCESS };
};

export const logoutEvent = () => {
    return { type: authActions.LOGIN_FAIL };
}