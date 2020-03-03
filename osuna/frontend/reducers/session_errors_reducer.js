import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';


const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return { errors: action.errors };
        case RECEIVE_CURRENT_USER:
            return { errors: [] };
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;