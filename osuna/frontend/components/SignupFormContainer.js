import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup } from '../actions/session_actions'

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm);