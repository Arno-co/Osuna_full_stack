import * as SessionAPIUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: REMOVE_SESSION
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors
    };
};

export const login = (user) => dispatch => {
    return SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
} 

export const signup = (user) => dispatch => {
    return SessionAPIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
}