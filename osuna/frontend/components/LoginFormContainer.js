import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login } from '../actions/session_actions'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'SIGN IN'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));