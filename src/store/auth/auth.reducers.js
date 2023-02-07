import {authActions} from '../actionTypes';

const getInitialState = () => ({
  registerUsers: [{email: 'test@gmail.com', password: '123456'}],
  loginStatus: false,
});

export const auth = (state = getInitialState(), action) => {
  switch (action.type) {
    case authActions.LOGIN_SUCCESS:
      return { ...state, loginStatus: true };
    case authActions.LOGIN_FAIL:
      return { ...state, loginStatus: false };
    default:
      return state;
  }
};
