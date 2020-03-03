import React from "react";
import { signup, login, logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './Greeting';

const mapSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(Greeting);