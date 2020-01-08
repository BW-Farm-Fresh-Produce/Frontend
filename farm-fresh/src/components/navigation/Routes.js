import React from 'react';
import { Route } from 'react-router-dom';

//Components
import LoginForm from '../../components/LoginForm';
import PrivateRoute from './PrivateRoute';
import SignUpForm from '../SignupForm';
import Consumer from '../Consumer';
import Farmer from '../Farmer';


const Routes = () => {
    return (
        <div>
            {/* <Route exact path="/" component={SignUpForm} />  */}
            <Route path="/login" component={LoginForm} /> 
            <Route path="/logout" component={LoginForm} /> 
            {/* <PrivateRoute path="/consumer" component={Consumer} />
            <PrivateRoute path="/farmer" component={Farmer} /> */}
        </div>
    )
}

export default Routes;