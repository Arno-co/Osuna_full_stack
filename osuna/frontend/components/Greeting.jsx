import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    if (props.currentUser) {

        return (
            <div>Welcome {props.currentUser.username}!
        <br />
                <button onClick={() => (props.logout())}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>Not signed in!
                <br />
                <Link to='/signup'>Sign Up</Link>
                <br />
                <Link to='/login'>Sign In</Link>
                <br />
            </div>
        )
    }
}

export default Greeting;