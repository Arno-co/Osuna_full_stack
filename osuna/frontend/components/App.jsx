import React from 'react';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer'; 
import Modal from './modal'
import { AuthRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            <h1>Osunaaaaaaaaaaaaaaaaaa</h1>
            <GreetingContainer />
        </header>
       
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        
        {/* <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}
    </div>
);


export default App;