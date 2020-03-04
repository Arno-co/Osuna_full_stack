import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../actions/session_actions'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'SIGN UP'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));